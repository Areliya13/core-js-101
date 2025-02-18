/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = () => this.width * this.height;
  // throw new Error('Not implemented');
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
  // throw new Error('Not implemented');
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return Object.setPrototypeOf(obj, proto);
  // throw new Error('Not implemented');
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  str: '',
  order: -1,
  norepeat: 'Element, id and pseudo-element should not occur more then one time inside the selector',
  rightOrder: 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',

  element(value) {
    const builder = Object.create(cssSelectorBuilder);
    if (this.order === 0) throw new Error(builder.norepeat);
    if (this.order > 0) throw new Error(builder.rightOrder);
    builder.order = 0;
    builder.str = this.str.concat(value);
    return builder;
    // throw new Error('Not implemented');
  },

  id(value) {
    const builder = Object.create(cssSelectorBuilder);
    if (this.order === 1) throw new Error(builder.norepeat);
    if (this.order > 1) throw new Error(builder.rightOrder);
    builder.order = 1;
    builder.str = this.str.concat(`#${value}`);
    return builder;
    // throw new Error('Not implemented');
  },

  class(value) {
    const builder = Object.create(cssSelectorBuilder);
    if (this.order > 2) throw new Error(builder.rightOrder);
    builder.order = 2;
    builder.str = this.str.concat(`.${value}`);
    return builder;
    // throw new Error('Not implemented');
  },

  attr(value) {
    const builder = Object.create(cssSelectorBuilder);
    if (this.order > 3) throw new Error(builder.rightOrder);
    builder.order = 3;
    builder.str = this.str.concat(`[${value}]`);
    return builder;
    // throw new Error('Not implemented');
  },

  pseudoClass(value) {
    const builder = Object.create(cssSelectorBuilder);
    if (this.order > 4) throw new Error(builder.rightOrder);
    builder.order = 4;
    builder.str = this.str.concat(`:${value}`);
    return builder;
    // throw new Error('Not implemented');
  },

  pseudoElement(value) {
    const builder = Object.create(cssSelectorBuilder);
    if (this.order === 5) throw new Error(builder.norepeat);
    if (this.order > 5) throw new Error(builder.rightOrder);
    builder.order = 5;
    builder.str = this.str.concat(`::${value}`);
    return builder;
  },

  combine(selector1, combinator, selector2) {
    const builder = Object.create(cssSelectorBuilder);
    builder.str = `${selector1.str} ${combinator} ${selector2.str}`;
    return builder;
    // throw new Error('Not implemented');
  },

  stringify() {
    return this.str;
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};

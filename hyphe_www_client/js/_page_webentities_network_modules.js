;(function($, ns, domino, undefined) {
  /**
   * A button that will just dispatch an event when it is clicked.
   *
   * @param   {?Object} options An object containing the specifications of the
   *                            module.
   * @param   {?Object} d       The instance of domino.
   *
   * Here is the list of options that are interpreted:
   *
   *   {?string}         element     The HTML element (jQuery)
   *   {?string}         label       The text
   *   {?string}         id          The DOM id
   *   {?string}         bsIcon      Bootstrap glyphicon class
   *   {?string}         bsSize      Bootstrap size class
   *   {?string}         bsColor     Bootstrap color class
   *   {?string}         cssClass    Additional css class(es) (bootstrap already managed)
   *   {?(array|string)} dispatch    The events to dispatch when clicked
   */
  ns.Button = function(options, d) {
    domino.module.call(this)

    var self = this,
        o = options || {},
        el = o['element'] || $('<button class="btn"/>')

    if(o['bsIcon']){
      el.append($('<i class="'+o['bsIcon']+'"/>'))
      if(o['bsColor'] && [
            'btn-primary'
            ,'btn-info'
            ,'btn-success'
            ,'btn-warning'
            ,'btn-danger'
            ,'btn-inverse'
          ].indexOf(o['bsColor']) >= 0
        )
        el.find('i').addClass('icon-white')
    }

    o['label'] && el.append($('<span/>').text( (o['bsIcon'] ? ' ' : '') + o['label']))

    o['bsColor'] && el.addClass(o['bsColor'])
    o['bsSize'] && el.addClass(o['bsSize'])

    o['cssClass'] && el.addClass(o['cssClass'])
    o['id'] && el.attr('id', o['id'])

    el.click(function() {
      o['dispatch'] && self.dispatchEvent(domino.utils.array(o['dispatch']))
    })

    this.html = el
  };
})(jQuery, (window.dmod = window.dmod || {}), domino);
$ = jQuery

$.fn.extend
  imageChecker: (options) ->
    $(@).each ->
      if $(@).is("img")
        new ImageChecker($(@), options)
      else
        $(@).find("img").each ->
          new ImageChecker($(@), options)

class ImageChecker

  settings:
    onError: null
    onSuccess: null

  $el: null
  el: null
  prop: null

  constructor: (@$el, options) ->
    @options = $.extend({}, @settings, options)

    @el = @$el[0]

    @prop = if @el.naturalWidth? then "naturalWidth" : "width"

    if @el.complete
      if @el[@prop]
        @_callback("onSuccess")
      else
        @_callback("onError")
    else
      @el.onload = => @_callback("onSuccess")
      @el.onerror = => @_callback("onError")

  _callback: (name) ->
    @options[name](@$el) if @options[name]?
jQuery(document).ready(function () {
  // Valida la obligatoriedad de los campos de tipo url
  var validaCamposUrlRequeridos = function () {
    var valid = true
    jQuery('#layouts-node-form .link-field-subrow').each(function () {
      jQuery(this).find('.link-field-url input').removeClass('error')
      jQuery(this).find('.link-field-url input').parent().find('.description').remove()

      jQuery(this).find('.link-field-title input').removeClass('error')
      jQuery(this).find('.link-field-title input').parent().find('.description').remove()

      if (jQuery.trim(jQuery(this).find('.link-field-title input').val()) != '') {
        if (jQuery.trim(jQuery(this).find('.link-field-url input').val()) == '') {
          valid = false
          jQuery(this).closest('.link-field-subrow').find('.link-field-url input').addClass('error')
          jQuery(this).closest('.link-field-subrow').find('.link-field-url input').parent().append('<div class="description">Debe llenarse la url</div>')
        }
      }

      if (jQuery.trim(jQuery(this).find('.link-field-url input').val()) != '') {
        if (jQuery.trim(jQuery(this).find('.link-field-title input').val()) == '') {
          valid = false
          jQuery(this).closest('.link-field-subrow').find('.link-field-title input').addClass('error')
          jQuery(this).closest('.link-field-subrow').find('.link-field-title input').parent().append('<div class="description">Debe llenarse el titulo</div>')
        }
      }
    })
    return valid
  }
  // Valida que los campos de tipo Link sean validos si son asignados
  var validaCamposLink = function () {
    var valid = true
    jQuery('#layouts-node-form .link-field-url input').each(function () {
      var url = jQuery(this).val()
      if (jQuery.trim(url) != '' && !checkUrl(url)) {
        valid = false
        jQuery(this).addClass('error')
        jQuery(this).parent().append('<div class="description">Mal armado</div>')
      }
    })
    return valid
  }
  // Valida que los campos de tipo video tengan una url valida para video
  var validarCamposVideo = function () {
    jQuery('#layouts-node-form .video_embed_url').each(function () {
      jQuery(this).removeClass('error')
      jQuery(this).parent().find('.description').remove()
      var url = jQuery(this).val()
      if (jQuery.trim(url) != '' && !checkUrlVideo(url)) {
        valid = false
        jQuery(this).addClass('error')
        jQuery(this).parent().append('<div class="description">Mal armado</div>')
      }
    })
  }
  // Verifica que el texto iingresado en la url, cumpla con el formato de una url valida
  var checkUrl = function (url) {
    // regular expression for URL
    var pattern = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/

    if (pattern.test(url)) {
      return true
    } else {
      return false
    }
  }
  // Verifica que la url del video cumpla con el formato valido para un video
  var checkUrlVideo = function (url) {
    // regular expression for URL
    // var pattern = /^(http:\/\/|https:\/\/)(vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/igm
    var pattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm

    if (pattern.test(url)) {
      return true
    } else {
      return false
    }
  }

  jQuery('input, textarea').focus(function () {
    jQuery(this).parent().find('.form-control').css({ 'border-bottom': '2px solid #6200EA' })
  })

  jQuery('input, textarea').focusout(function () {
    if (jQuery(this).val() == '') {
      jQuery(this).parent().find('.form-control').css('border-bottom', '2px solid #0091EA')
    }
    jQuery(this).parent().find('.form-control').css('border-bottom', '2px solid #0091EA')
  })
  // Evento que se activa justo antes de enviar el Formulario, para validar los campos de link y de video
  // los cuales estan dañando la informacion enviada del tipo de contenido si estos campos se arman mal
  /*jQuery(document).on('submit', '#layouts-node-form', function (e) {
    var valid = true
    if (!validaCamposUrlRequeridos()) {
      valid = false
    }
    if (!validaCamposLink()) {
      valid = false
    }
    if (!validarCamposVideo()) {
      valid = false
    }

    if (!valid) {
      e.preventDefault()
      console.log('No envia')
      alert('Los campos de Enlace y Video deben tener información valida')
    } else {
      console.log('Si envia')
    }
  })*/
})

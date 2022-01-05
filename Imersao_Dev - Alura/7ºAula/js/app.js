var docinho = {
  foto: '<img class="ajustar" src="' + "https://i.pinimg.com/originals/2a/6e/10/2a6e101bb1479940fb06376518692651.png" +'">',
  nome: "Docinho",
  atributos: {
    ataque: 80,
    defesa: 60,
    amizade: 50
  }

}

var lindinha = {
  foto: '<img class="ajustar" src="' + "https://3.bp.blogspot.com/-jeQMpFdcqLs/V6uKCL0V7xI/AAAAAAAAM7Q/IZu30gli8ZQDoqv7PfrYvU02S7n_I558wCLcB/s1600/lindinha-meninassuperpoderosas%2B%25286%2529.png" +'">',
  nome: "Lindinha",
  atributos: {
    ataque: 70,
    defesa: 65,
    amizade: 85
  }
  
}

var florzinha = {
  foto: '<img class="ajustar" src="' +"https://i.pinimg.com/originals/f1/8e/a0/f18ea07b2b301d00003c965dfde97639.jpg" +'">' ,
  nome: "Florzinha",
  atributos: {
    ataque: 88,
    defesa: 62,
    amizade: 90
  }
  
}

var macacoLouco = {
  foto: '<img class="ajustar" src="' +"https://i.pinimg.com/564x/cf/40/bc/cf40bc4a29525888654f82516efb04b0.jpg" +'">',
  nome: "Macaco Louco",
  atributos: {
    ataque: 77,
    defesa: 62,
    amizade: 10
  }
  
}

var senhoritaBelo = {
  foto: '<img class="ajustar" src="' +"https://i.pinimg.com/236x/5f/cc/07/5fcc077fe735452247a4597627800d86.jpg" +'">',
  nome: "Senhorita Belo",
  atributos: {
    ataque: 40,
    defesa: 50,
    amizade: 60
  }
  
}

var professorUtônio = {
  foto: '<img class="ajustar" src="' +"https://i.pinimg.com/originals/fb/9d/2f/fb9d2f2c42a5a6df1089eaa132dc8b46.png" +'">',
  nome: "Professor Utônio",
  atributos: {
    ataque: 50,
    defesa: 40,
    amizade: 80
  }
  
}

var prefeito = {
  foto: '<img class="ajustar" src="' +"https://i.pinimg.com/originals/72/5b/fb/725bfb5ec407079df7e13a2f4b7f27e6.jpg" +'">',
  nome: "Prefeito",
  atributos: {
    ataque: 70,
    defesa: 60,
    amizade: 85
  }
  
}

var keane = {
  foto: '<img class="ajustar" src="' +"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAEyCAMAAACs4eCnAAABZVBMVEX///8AAAD+s0P9zIqPPy3/EwA0r7D/z4z/0I3/uEWSQC7/0o7/tkT/1I/5+fn/s0Ph4eHw8PD0xYXm5ubuwILYrnbjt3wtLS2IiIhycnLt7e319fXDw8P/u0b3rkHqpT5mLSCFOyrV1dWXl5dHR0dTU1PJom4/MyPVljioqKglJSXZ2dmGbEkdHR25lWWSdlA9PT03GBFmZmYRERGurq4uJRlJIBfJyck2NjaggVdKOyh3YEGsi14WEgxvb2+JYCQzJA6tei5cSjIlHhS5DgCmdSyCXCIrEw7k8vK+hjLwEgDOkTZcQRgfDgp/f39kUTdFMRKFCgDNDwBXBgBtCABiRRqYCwD/a1FONxUpHQseAAAzBABdQRhzUR5hKx91NCUoAwCvDQCU0tJTuLkGDxY8n6BwwsIjfn+04OAcXV3S7O0QOzsrj5AAJyqm2tsXS0y4TDnYWEM/BAAjJg48HApMBgBjBwDY058VAAActUlEQVR4nO1d+18a17Z3Q+1ABgyOgC+URl6KCCoQ5eUDYnI0jRjzqHm1TXN6eu/tPfe0ubf9++9aa8/AvBlmYMjnfPr9JVFQv6y913vtPXNzf+EvOMFabOvoKLNyeHiYW14+hn9WMztHR1uxtVkTU7AQ27k+zBaZGYrZw+vM0eLCbBnGapmcKT0d2ZXa0owYLm6t7FcdUOSo7mdii75z3F3JOmaoIJvxVaJrNfNtOBrHvi394sqyS46I4smuH8qU2fPAkXCYmjbHlFeKhGJtmvJcO5kISUB2evI88rzYKuS2pkMyM0GOiJPYFEiuTJgkY3u1iZO89s6qXtd/Jzdhca66J9cpF+T/NUtd/YsTFaeXPdmIJlvyf+vlfEnn/FcnZ5R2PJCsBINCNK8IsSVFk+VKqVvoKK/v7U6IZMp58GNAI4gISfkmfNGp17tJISQKUjyeBJSRa3EyNmnRPcd6PhrkCAXz5XwiGRcE/rWAEJOkUEcTILngJNI1RwnIDSCEBIXi8HsSbdkJSNO15nQTelJGCMESm8Si77rkWC+Lo0kCxAq8ueo1kB8/KCeODSk0miEXZwPen1v3RNJVrFZox6POJIkI4d5c8UJyfXxRFhqJaKJcLuel6Ghx0kcR+vBjXmK52rgcmwkplC+Qge11y/ERPEMJCVnGwYfueVjzsUVZl8QS/adaJbkKdjwFibVFIsu8rPmRQ27VZqvSzgejiR5r1ln1ukaC2cUkqWyzPwXYkWSuoqjors2RXVDZbRbqnU692a/kk3EpKIYEWSiqvHsJAr6GjubwSwHfnaevJXCgOZckF+wceDIqJBMJUGZRiJaTXFOECtvTigQ2Ni2qAjGekKJR2QJADFLiLlTMM9eecstulZNCUHZ5QrLDumVJFMQ2W9bXBWLLKpohqY0/2mm2wMHDu1lXUl7quxambRaRHCxdqIxfNxtxWEFjHBZjHcVVhiAyWokdrWLdoREU1L8khMJ0V0m0jTPyA5aiEuUWWMbkt6RYQZTtDpPfsFVbZV34qTK9gDs6KEJ4tOOGZMy21lJW2RhJkpL5cpPlTCPvFdYOySoy/BQYxJRCfClQoiIsyKEblrbbUsMSN6cIttl8/6/tFeL4jrz6Uyzss0JcQJtZIRUSkj127KbYZe/DdSx1JDTI0JvFvuZTQLDVBhVKwErX8UPAy65Mpn0K3hC1LGF3mu1KxDrrwpujdaaRVYZV88EG7WdUL1R5q19gh8OxWAIJy4gh14GtJ3W0LOf2WAGztn5eQvUR4u5s0b4ty4qWJRpNiGUX/mb2m1Kw5PiGLc2rsObVfjk4iPHAt7pgaV9OLelYgsGbW/jp06dPPxl35+7fS+ADeuznT5/+8dOQaYb1g6rfAqbJRcxuz7JlUB429+lrxD8MNBeP3wi4JX6hlwffXme9oW+gjenCSdqSVDm3ILd6jP3ja45PhmXPMQGVmFh+/R+Db1+rfAP9BhexsD1LsoFaWX6t4NN/GVjGUVb/qfsQO6w1XHEMkVx4H/tWhHqx5L/x84Dm1zqahxBHwjt+5S/+pHwbnGd0+BtAvVywHNGM0LJEQ/PfQ5a6RT/BaDde+Lv8OZSNu8t6Q5bBeMeNwRyPZbQgbzudvAgoS7T7MktlZy5pWIo9NyxHlF50LlJsaFhq1xz3JW5d+R2f5G9vaViGXLEcUVqt6MKNhKwcJsJc3Gck+Gf/lF+U90OK1T3vyxFly77ORcabv6pZfq36TbFiHVmGGsoHkT9CjRy8N5YjVrwZ1bKMltRKrjaLILMS38RNec1ly76i3jZoy8a3l1RsK3QLvY45y4KWJMhCuzFVS74qs8FoXeV/1pdZQmvVx24HLKG48mIUsr58uW2o27NhOjP4M81/qlmqHOXAuCKTXwafIKVxYOgh3YiyxysoghAKBU1omsTBamEOTaZq+2EhEPbm/+C3IVzPq39Fiy2PzTKnCXsEzOvtlRze1GVqYSosQcNVHwho/ovv2UNd9Fd3kfjkmHrT8JKTFnVDATrJfjVhec2aqoUVYGH/+be5rZ3iG009AX7YRfsnx+oa7yJIhkWPG2i21TRlljV1VhzE1LvOlo9Zl4foA4BXcJH36FmaLHrbUFATS+zXn7UsjyAU1dosMYkFy34+qmXZZ/vjlw1y+qgnKOhVqGUs+6FEflGzBNdQMog8Su2ffkK14pjpro5NEsIYpjc1QrClYVkwLDm8p9xh//pZYRmDDK8kmbxLKvfAlrW01tJFV3LLkNoojY8hzHol0QTI6V+/ANFMBjj2yvpfIksTG1L94c9DSOUm6wFhdoyyEtpqloaPQW8JlQcbuNs2KwYLYgIXpVBWhRoJlwWYXUM2SyvTVjnMQtTwOkKUEpVus9lqJ036KUA72apis0VddRcqLotZ2LnPa2iQaMVEz37JORUxGqXysO77UTHRBknXS/mgxlhKrltTa8faQq5YSfIixFDVG057TzIZtEGFViMe1LUksWVw4ookL7o1hoVwscQ5C9JAh7pjkYTVyOcTcdHQsRISHQ+t3a0qdnAU6ws7XJZstGzpfkwEqPnC0Nel3wcKblWwc4AYNnxKSflXSwUlagglu46XPDnyg1Ar0kvzbBHnsXoliDMR5cEKK5Zz5JILCVNzpQb1X1z4HTWONInF0HWT9bbW8gGFVl2yf4cQB6OR9TplsqDp4+cHkhGkSsdYxtQDAr5BqCvEk2Zvwc1jP2Oy7uAzaIfwkkNaYqKrSajNBAWr2VW0L9Q0kXwIu3v2Hjy2PzJPj+lSyboqkhHEciFvu+SQzDx8x3dmNFFoGhefZg3sO6ULy6NaqQs7hjpMPanS65D5Ig5JtNjBb6wB7HB/GC0CdbRGOPAV24+RStVMyxu9hP0q61g+/P03Vm+R5TKIErs8ozSnZi9syxZ+xzQaM0W0xX57+N3v9wBMXayUX8UIa1/vv1OaJgF1nexW3HrSoG3qQkwAuvHbk4e/f/fdd7/pMxQ5DNzXVwoWssvqzOKYdUZsXOvuWSvuTJyg4z/8/ow9+/4HtRHjL5FjODZEQvBHr4dfnbBeY5R6HVnWg3t5Z8KEzPPhQ/yBqr4lSDlp1piQQYBfHHwBaVO5P3JcImYpTVYKOhEnptmIuk6SYhLz+6wxpozt9Vg1NvzzjfyIfYlYshkwKUsOeIaSTWyeazMLIUStvWuTP3jNwPXKURxEuKVoHTbmyNGTJZsCYbPsYARLkBJJSS9ISkZNG3qsIORllltZ1g82WNsBy7l1u5pwsx0aPYWlNQiCKDXk3MnEnO+wRjRRJAsKJqYeTEIK6GyMJ2XXU+lUEkHn42Kw1snSML87TulO1Cwed5JiGYW8fohuLthsYvXV0bDRmn1ZuI+JjDEVMxVqvqUt2lazh+pUAqvG0bsaRhgMk8NSNR4daYlUC2GPQqWcFCGhsbb2ghAN5SuGaXDd7tzH9hWL0d+DXKbMEiG0WE57F1sjh8k69X47n0zGg8A2FJKZUdIJea8YT+ZbJhR1U9Y1SPGFfG4JVKHTkMQ8RN244M7TjXVn0//1Zr9UqlTKxLKcSIbEYCLRrrSaFhNU2lHwPaAVamRhgxWSkLqj54+OOVG4az98oAFFktHR79PWMzJUIOujoxKDlSZmVZAU9XtjjYsvpOzHD1SgarZoUozXYF9bVt2tYuUpDuoYD+FUJoUnXZY3hk0jkHJ4novSIbFh/6aMLrDMUXMzDj8sUNJWkASI7foJF3WuI0dnKijPoI1vheq1XkAZeYChzxMP0J1WNM86wYqrOtfSyuiFp78jqAtfWhRXjA0osCKYbkKSwXMp0Jt8neWTPeby6F9qxb7F3+E5h0n7hZCrmczXLkA4SJOtebkuio1JVoZo/9BDcSZzaM20yaMLsWV8ae9wx1wXFrK8LQSylJtYEDh1MVT2doQhtpXJmR9Gk8uzlMaqsXySsm41rg5YKu1iqdBquB9yVWMpVcus5nSqLyfpNFMrY/96J2XfKamxfpSzlLtyAs0LL0/sgPfC+uLi4lKKgEZAqWFISO9wNZNaclBEiVXp00F0z388RHXS5UkdANLhcJgtSmPNfq6wOtZDQ7zmzHOO4ykdlY/tDeuFAkjDuYYuHnPtJqMetMw5JoKUqjyAPe895+5tZ9Cilsu4bkYdnSGn6kmT9xljgIBPvYLalMkfuOutOAJT93Clzlh/q0Y/GoqTna1OSW8QOKc7HIHDuv4YxehDNJlCnlrx2WkckVVwDf5xWFtD75N1/LMp8gdRiukPvR1Mssd6UdMSwPqk4xh2PUs2LD5V5SZgAayiO9HhNB/YIVFS4XWKeoPA6LMcHQLHPRzak8Uqw34GFtonfxxajfWtY2BZL6gASn7szK5neKMGMtviNK8UiGUs0uF9JzsTz7DiJomPo2/jYlfpE7x4/ZK9Ob+4OD19/OrV3dkb5tCJHPLTH7gtp7Qr13cOeb5994Zdzd8ythEGRDY3N9PbnPvhKOt3JA9Eo+2ayqUHg1bG6dONc/Zo/uoZ244EOCIRuS5UHaHpctaDc4XFiV9xsn4kXybQ+3AZjkQCafZ8fv4zOw8HFJqnXMTgg+zCjppsZrFV7mqAwwYx5dqam/N0JHI/ELgf+PBifv45O40MWF7Cy6/SSHPfeiXX92Xvj9tyopHQ0o5M8exieyMs0wqf08b8dlNhGUCCb9KbH2yDHLBClE5QWWgSB8plirUs15ezD09h8w04BTbZ7fzVW5YefGPjDt51GQ5c4Ltz5qH30rKShWBtaVIcU6tylnt3mQ6rKCKp//04f/ViqD6BMNJ7HAmELzFmXDZVohWInOXzgOAEJkIxlpGrfHcX6Q0dRyD1+CVuzIuh+pAtgrdF0ihVs2shcG6WT4BgaWkS23LrRE7BO5ebET1F0pbP8/OP2IeN4ca8wSXHlwKnFDgalGhVOSlHh2K9X2WzJbf0MU59asIRqDx9Nz9/xW42A5EwF3TkMf7E40BEVniDEoFB78hZJwQnRa/R7y5X6k5JwoBsaBM1LLf/b35+/l1nO7z94ZR2beTy7gzVLB0J3A9v35ASaZhkB8UQ3JYenfjSqswxKdBEyGNTWQbSyPI5u4xENk/Z2WkaPgv4STBEd2nanGSSiqplxb6OPJeELTVv0zBym6KSxCko3D9n5iw338/jxryAV8OwwB3S9ghq+h0KP7JBm5OtDJSIDWdUhKa3bUmBI+uV4ryvg4k20/O7TytOsrxlN6g+SFPevxGQITKHVX9KcdKyvOqZQSGRJ8YenDhN61RbSaX3hOcCVTaR78hAmvblAbAEV05KHj7FDcl1n6FK8Q9CJmmPlGipOJz5C41VCtFjMTdcayWFhVDnQq0+kfD2t/iNyNPPyPIlS9Nn2LyR33c/AirEvxfYuJTDuUXKOZuD7N3OiY7CEq52K6npi+Es4gcVyzDqB5Igq44bk5uACHoeEmvkXDELkbRSyV5OYTanjEVRt8C1KLHPU9LO/lHscjcIKcKbFJ/R19VHyPKKncqMmCzCSLqjfA/f3ORT+vuqxDjedDl2i8CmWUU/nCMk67L6Asc0RRK0ssDgilh+5pzvR9DxEMttWX3IZdalqHIJVEIRJWqk23gInazuiCb9zq6sPpHN8zP+50CZgQEt+Pz8n1yC9zFW5ywv5B/Y/JZRMBmS2ljFGJwEwWKn6+o0di4NI+eCiI240/D9yMYl9ybg3cEWPu1xUaJd345oZLkB5FDbIQJV1kaMV4Z1YxqScJuI43yJ/oyMGMxTVexuI8BtXzUFDuTVRho23Md5hSVfXtqXRPcNeSv6hrI2QiheVtu2fbe6k9GfigL32Jb7OGfpV0x2y2Crzs9Bqq/nByxfkV1XdBx3I3rywOOhQyQRqoyGezOUHVyKISPPp1gPa8eyOcFlUsa4FEmiwTxDCd4HA/UYtSrwLXsMbMNPVfqiXh50O3tuSS4u6+ZV6UAJyy0NbqI7RJfGQ/eXVwOSoD1oAlCC9C+qDDpNtPJt44CPgOVY9y58d093ilQI4tVh2YwSftAioSjfvb4dcsSkogM6v/FBdj13r1B5KOgwMRh0eNxDhrtVZT3duDfvwxRru4og8QQZezGvwdU7lCGK8hQz4MvLDeB3sZHGXW6c7aDhQZe3giBiRcM5H9AfOp+TY8uy4UBR3upYYnob2TzrXfCIiAi/x3y3UI7rJ3toDNNLyLawbLbZQxJ1GOWC7ULWIEqsFZ1FNj+cpiP3lXAEbP85bZJCKaE+ZCGQ5ni7lGqHGZacPj5pUbWmiPJKx/I12s/7YVWKGT5VHDeilE8Eo1FRFKMSv9/PW4l6PYezIibHnYLUk8GEEBT8uY7k/AvZaatCO8p4TxaV4Y9es9uvVFpd7s2vPRZW0fkUEibTgSJvy6xmTER59eMgmBwgDUtexc5DylCMNa8ljAW6aaVhMsUIG0p2Qq/1ovwICx7QIfx4EPIsaW7APplIGZ2uz2rmg8ZRtlCctOhHvShxwS/1iTDmFAOZrcdSq9nl5Wzu2qavPx7oaApdJmcgKtJxinePDBp+s6GXZSAwmbkBa3CnXe22E/GQ9qSWEGyjFv2hEeefhtSNhAmxyTQ7YnNza8rd0M1WpczvzBLwMDQw5pOpn1U0H+kyN2Vjnk+7kwNIXaumMwrNVqlVarTbCdQidHBDu35lojrcFk2+Gm2C9VjmcF8/n0NXIOGiK3vz6g9IvE3rHuEbF8ftXWFx9yiVuc6hPtEtfX3SdcwG/pBZvmQ3elOpsDydeofRhDDugDg/fVhQTDtI8i5gTpLcz77fLLEG11DNN+GS335mrzbNOQYoBq5O6Z5tK2wp6x2Uc6uPFGRcWEkywAuu/i45Xn7LI1pIe2km5/WjH9kriy0ps3yqPiThB1L89h8pKCQrvDDxlr25NFduBffDbNRJuMkCQ1+IlPJSMNqlmWNsqwRMi9gqbLz3GO6OiR0qJpTjAh6qzocwvTLEFyZLDhGHi+sLXAMLPGI5IWDOgteYdI21YTOW270pNZZNUQNqYrkh0PHVOsTyBU050xLhbz2fdnUOyDOa0XJTEKQeu6Hrdaz6P3phQsJbnG5gNMQSFrBhOwotdnrB+tFQXlVztWWZ9pbTjgVIhkqsJYTK7C5yCg5IKjjRHcTm3bRHmoagXCgZkupse+OU5aMVduOIo1yE82nJMQVvhkIldroBXi+ZdLgrA9z9TD8WHrIsRxMYSG6+7yS7cl3fCTY6XupW47LsJcFGwmbcfN9tOFQdvuQfmPe+rWOWzWiDNuPmTbPXs40xZrbkOPwb52X99Bk7M0kYrVlijWO6Ga8CPPRZYm/wr6Y7N2nHm5JoYjHel+eLLVVZn7Fzat9cGGY37EGtFF8MO11i/4bvxrEEidj0Wq10DCz9fxhPhkOWsDGzvhh2bE46NeR6ULfUjyATa69O4klzln5tTGyhWkyXOGB56blC7QzoIS/dsgTj5Y/FPAEPOY4p1yL8ZjhcMk3sM3YztgUaAJvQE5xftEJsj/dA3crysS+uPOVpW3Lv4/aeLOfARukYYZAe1PoZ/7LLcbGqzDJ5YDmxkVVLLDP15O/4LGmYeerPCGVsjBTCBJhITl3JFzyypDmJqRcysb5qPiPqEGSKpndAj6PmISDiLE998OQZb4ZIZunhwLUjYHBp0mYcgyWa9XFvKxgX1xNhObnDzOZYNW/ZOgfl5F5max0AA/U7byy3/WHpqPA7guV0I8zFrEfX4wtLPOfyF8u/WP67spyuJUKWk7BE02fp0aqj75nWJRUy1va9ekjy4ybX900SVMryxvJi+pHbBFie+lBoxeMfnrTHl4zi2musHvEjO7v2VoCRD3xMO9PFjMJs3M6xKLHlM/WWacaQj0dkhM2xKSMt49KPCgxmuh/ULDbS2xznHBenMh5zvHr/LeD93RkHHeia+iiZ/ZMjHWLqHZ8FRzSePXny5IDjIcc3HA8efMP8aFKY8EE8VLF5wh7eswSynP68Dk6KfmNNAvDVAbD8ygL3DqZfM5jjD8ayJkE4YN9bs3zmy7hBxgnLb6zecO8HNn3/OMdN0YEtywfPrGV573vmy+RgyhPLrx66ft7IWMBzXk9GsfzB8g3Mp1k3iNafPRjB0up12pa+zN2Cknce2AnzAbNmiTeZ+zKqg0puvaL2LEH93Z98HAtHZNZdsaQF92dsA7v41jpsz9If94jA4qCtKbJh+WTqSe4AmFS43JfMvwFM7OramaIHYAPMRenfgvOTfXbq88DSnoIdmup9bRrYxxugyBYsH/im4Qiw6wfWooSAwpwlRRrTH9lQULP1kUDmifkLB35MGQxwZOt9QEdMJX3vh44voaUCvNvMJhr/3oLl9375cBmrdsEbRBTmLP3JJYbASNiKJLI0swD3UMN9GgPnWLSzmFYsMWjzkySd6LK0mBYsITb29RDSHDnJZ5YrbpqOo3ec5i3AZti1ceX3TNNxDIf8mQFXoWhti0xZUvzr16mZAVasY0yQmgnLh54esOgSW7DLLNyPKcuv/DZDBBxat7BFwNLwCkWWvpOkJbdwP2Ysv3riqwsfIGbpfkxYou74dGJGh32rJQfzbWB54LtFl7FjFQoby0Rkhqbba7aCpWHHMpGO5UP/Ukc9shaG3cjyK58DSzVq5lqOy6uVMYa/vp181WNpzzSvQJba7z544ucpYj2uTZfcwBJFOatdOceTNCcsn81uVyKKZkuOzlD9TWQ9s12J2DGL2PUs0TnOUpR48MNYPdCxnLko6aiPafijZnnAqrNxOwPsmphMLUsU5SyCITUwl9TrD7CUmVPr9MC3E+PWqKH+3NOzRLx9i83ob76fvSjnqJT5YAAuwG9Yr9XtNgv1Dj2cwOFzM6YK9QPKn/14cAACPGDdqBiV4slEItGdwaVEJgBjVKg0SoB+t9+vAxij2y3oCZbx3gwSRzOssg4+D1QUg5IkxRGt4ROiKn7Wfu2wq7sVVRBL8rP06NZn38sZFjhhVe2FowOWIEq/K0OWSGkeLaRiiVc0zzBi0+FYeQiCzLIvs8T7tHzq5jkACLOkutRRaPKbkIV454uwQjLWs/T4Vj3LUMOnTrhD1IaX9w9Z4s1kX4YVkrFwzKrDx5wJBWIJu3L6p3HHArjJxuAuXIGuJkcFn2mEbsRCkZ4DpmGZ8GvYxTnkB4GpWPInN5z4eOXYaKwts4KkZclv+j6eXbXABDuq277pRjo0Rfmqr51mB6gOHtIBLLtJWn7+FGX/q+mWSBWHj6iFcJhV6Iph8YuiuYbHFgoyySB7d/Wc9cp4X36IaH4Zi07P/5CfUCtKLbxL9vZH1s+HIDZGmrOpqOtA1zN3aCvizYPv+FMpPr4E8TbycXx29heQoC3RZcL8sWpSib18xJ79yW9pff0HYz2693s2lX816AbpBip4NFFgz2GtAS/59fW3r1/QlzMssnKsEEm89xTvsH90y1gWdYn9Obhm/+qtXxcnWWIXLXeL8ocme3t7+4wtLy7wJP2lwvPjzPUcny7WFfhF0S/nb9/y03lH/K535QEQL30eK9FjHWsEcUEEQbKPeNO2MtavPP3j88crvuazXHK6GTEulnvsj1skObwJYK0m38/99iW9MksPBAv+B2u12NtHdKux9nLYoxXlmfSv382yErNWZD+CWfzzEX++w7E+sV3fGl4kPruC8NLwOQ/PmcUzRxd3t45SmZWV2bnJHeU5D1cvfDkP4w4n7AWxvP0MkvxSSYJ3fC3f9c+WZ9yIsMZSER83cwVGm+W+WElizAaRD8QTxZ3Zx2aWAJv++i2OoH+5gpxTnnt18qVUUi2Aw6LFLyX5ssQuY5kveEMqWPuiKixfCv4fjbiiDNRaUvQAAAAASUVORK5CYII=" +'">',
  nome: "Senhorita Keane",
  atributos: {
    ataque: 20,
    defesa: 40,
    amizade: 85
  }
  
}


var aparecerPersonagemMaquina;
var cartaMaquina;
var cartaJogador;

var cartas = [docinho, lindinha, florzinha, macacoLouco, senhoritaBelo, professorUtônio, prefeito, keane];

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
    
    var numeroCartaJogador = parseInt(Math.random() * 8);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 8);
    }
    var personagem = "";
    cartaJogador = cartas[numeroCartaJogador];
    personagem += "<p>" +cartaJogador.foto +"</p>";
    personagem += "<h3>" +cartaJogador.nome +"</h3><br>";
    personagem += "<p> Ataque: " +cartaJogador.atributos.ataque +"</p>";
    personagem += "<p> Defesa: " +cartaJogador.atributos.defesa +"</p>";
    personagem += "<p> Amizade: " +cartaJogador.atributos.amizade +"</p>";
    
    document.getElementById('cartaJogador').innerHTML = personagem;
    
    var personagemMaquina = "";
    cartaMaquina = cartas[numeroCartaMaquina];
    personagemMaquina += "<p>" +cartaMaquina.foto +"</p>";
    personagemMaquina += "<h3>" +cartaMaquina.nome +"</h3><br>";
    personagemMaquina += "<p> Ataque: ???</p>";
    personagemMaquina += "<p> Defesa: ???</p>";
    personagemMaquina += "<p> Amizade: ???</p>";
    
    document.getElementById('cartaMaquina').innerHTML = personagemMaquina;
    
    aparecerPersonagemMaquina = numeroCartaMaquina;
    
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        //console.log(atributo);
        opcoesTexto += "<div class='escolher'><input type='radio' name='atributo' value='" + atributo + "'>" + atributo +"</div>";
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i ++) {
        if(radioAtributo[i].checked) {
        //console.log(radioAtributo[i].value);
        return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    //console.log(atributoSelecionado);
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert("Você venceu a máquina!");
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert("Você perdeu, o valor da carta da máquina era maior!");
    } else {
        alert("Empatou!");
    }
    var personagemMaquina = "";
    cartaMaquina = cartas[aparecerPersonagemMaquina];
    personagemMaquina += "<p>" +cartaMaquina.foto +"</p>";
    personagemMaquina += "<h3>" +cartaMaquina.nome +"</h3><br>";
    personagemMaquina += "<p> Ataque: " +cartaMaquina.atributos.ataque +"</p>";
    personagemMaquina += "<p> Defesa: " +cartaMaquina.atributos.defesa +"</p>";
    personagemMaquina += "<p> Amizade: " +cartaMaquina.atributos.amizade +"</p>";
    
    document.getElementById('cartaMaquina').innerHTML = personagemMaquina;
    //console.log(personagemMaquina);
}
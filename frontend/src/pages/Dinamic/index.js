import React, { Fragment } from 'react';
import  { Box,Stack,Heading,Image,Grid,Icon,Link } from '@chakra-ui/core'

function Dinamic() {
  return (
    <Fragment>

<Box mt="20vw"></Box>
<Grid w="100vw" h="100vh" 
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      alignItems="center"
      justifyContent="center" 
      
        
    >
    <Box w="100vw" h="20vh"
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      alignItems="center"
      justifyContent="center" 
      alignContent="space-around"   
    >

      
      <Stack w="50%"   
          display="flex"
      alignItems="center"
      justifyContent="center" 
      
      >
        <Box p={5} shadow="md" borderWidth="1px"  rounded="md">
          <Image   src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1LogDelNc2h1N33tAiKXsV8vaYFmDZTcmFtkG7xslY2y4nNNT" />
          <Heading textAlign="center" >Depresion</Heading>
          <Link  href="https://ayudaparadepresion.org.mx/" isExternal> Enlace Externo <Icon name="external-link" mx="2px"/></Link>
          


        </Box>
</Stack>

<Stack w="50%"   
          display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center" 
       
      
      >
        <Box p={5} shadow="md" borderWidth="1px"  rounded="md">
          <Image   src="data:image/jpeg;base64,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" />
          <Heading textAlign="center" >Ansiedad</Heading>
          <Link  href="https://kidshealth.org/es/teens/anxiety-tips-esp.html" isExternal> Enlace Externo <Icon name="external-link" mx="2px"/></Link>
        </Box>
</Stack>

<Stack w="50%"   
        display="flex"
      alignItems="center"
      justifyContent="center" 
      
      >
        <Box p={5} shadow="md" borderWidth="1px"  rounded="md">
          <Image   src="data:image/jpeg;base64,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" />
          <Heading textAlign="center" >Bullying</Heading>
          <Link  href="https://www.anar.org/acoso-escolar/" isExternal> Enlace Externo <Icon name="external-link" mx="2px"/></Link>
        </Box>
</Stack>


      
      <Stack w="50%"   
          display="flex"
      alignItems="center"
      justifyContent="center" 
      
      >
        <Box p={5} shadow="md" borderWidth="1px"  rounded="md">
          <Image   src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAeFBMVEX///8AAABPT0+enp7R0dG2traWlpb39/fr6+vv7+/j4+P7+/teXl6pqan09PTJycmPj4/a2tq+vr5+fn7W1tYsLCyxsbF4eHgQEBCqqqpFRUVYWFjBwcGHh4clJSVnZ2c0NDRycnI6OjpCQkIYGBgeHh5sbGwLCwur11bZAAAL+ElEQVR4nO2deXeyOhDGcWlFbVVqXVu3Vt9+/294CXsgy5MZKD335PnjnvsKBvg1TGYmkxgM/pyegr+pvrk0te0biUZ9c2nKk0LlSaHypFAd+kaiUd9cmvKkUL32jUSjvrk05Umh8qRQeVKoPClUo76RaNQ3l6Y8KVSeFCpPCpUnhcqTQuVJofKkUD33jUSjvrk05Umh8qRQeVKoPClUnhSqVd9INOqbS1OeFCpPCpUnherUNxKN+ubSlCeFypNC5UmhWveNRKO+uTTlSaHypFB5Uqg8KVS7vpFo1DeXpjwpVJ4UKj6p6dPtvBd6fIxmLTBK1TeXppikwtVFau66XnpSKj0pWrzM/5+kboynmW3UbbbRrX6XAiIGqVdtoy1MY/wiAlB0UpGhVX716K8BgEUmNTI2++5J5Yp+jM3ux55UprOlXa6f1uYznndP40Xc5jyKXT9yK0RSS2vDzE5FfqCa9qtxVHVb5tH2i9bSP9JzTB/Whod/gdT6sFC0/XqktEUjdbI3vO+f1Ic2uHomtEYj9QG0zHv9CI9S0yUyNP+ucZoNIpEaIy1/EBmlcn6QmjaW7Q2ioWuLJFI3qOk3StO5XJ+jJmCgcm3y0t1jsKYSXZ9DFhJ52odvWR2SGkwpbbtdQqkVduG1W6sUUlOwbY736YynFPrWo4+RiULqE2z7TGg7lzOfXC8hfA1oYCpEIQV7I4ziLGdCqa5OO2U4hTYUUv/g1uk5PWdGQnvHtS1vLo1TSOHBAD375Uwpjp8iVehilItT9UJ4CoewiTxZ44rp8UqJCYCo7LdIkUMaR1Anmkdiytu2QeoFb54WVgZupO5vzq9dLiSAZZByicSvxF7l8AR0Tk6OOoWUWxxwItkqtPUv5kZ/3ZJyNSKUdang3eNuJvtRfoPU4HxzfiKk2WdTBgoUbqhIpBzsYK71YTqdOQxQwJ23Ui6C21wSKVU5AqIf/OFsTX1wEhUV4TaXRGpOnN5wyC5Y7po7nVho1i0ph8hP1gYOBI3NtLh1QdgxKerrhyePDE20uswVT1IR5wW+yaiO2DCo/f6qhQGvoum+Y1IuAVNdO8Su677c9rrpqbm+gk+Klec+A91K/c0r29OsC7dTVFIrDqrBp7V95ddurRRGSnrvnNTiyiG1t46Bqm99E+/VJHMZWBukKH56Rdb6DsV3Olm4ApspOimOTY91tDTf/AbNn7Fogt9xSioau1uAHQ+VpRS0cf59QiFh08GR1CslOYnHAWqZfYXG6e26UZlcJkcTgxGbtav7ZZikzKaqfnZLSydqchnBc1Ib98uQKtsqMobLtXM7MVJuFiQn9XA3A1smKePEjXzmvhMjZS3i+Fq+l70uJ7Un5Huci7VqMvlH8pld7VVg8aZOVR8+J/VDIDVlDn+mn9uQzrt21KVsr0XswS0apAakiIppqo5630Q6rxtzHiCk5jKpZyoprqegzwxIpy2CafsRn5Alz3ZSkqLl75mdSv/OV89aBZOONmi126nyRpikuEZd609WT5oF49by5rJuv0BqGiZWVsTJQ5eKkZq0yeLKOedg/sWgYdDcUpW+Crikxpfh42czjF+J2SmKDVzoUNMhS+tRSufsbPE0UbZ8CJfUU+EcDPMuMb+oLoRId9nKKZ/BT0tmaiZ7G9ZYhkcqlFJ4+YpHxzrcUrqUQuWU4DRox58ay3Xf9qk4NSksVo/qHTbvVXJx6eWEmnpdbynPWAe0onlZwss4SsQBi0EntVT01+zPFI7uxUdPC7yT6SKa8ozlG29dSarrOHiVAk3EXjwHRFLKaocieTLPhsBN6sOiKwg0HlV5QkT0ihOFn7Ej/jWLroP76VEt+obGICKpnWaOobx+0uNGmTd9A0lpYr/i+P2Fs6zkOhiWwWllRgibBRgpSZlXo88M1TNFSBK/cde8RA6eR9P4CcXxy9CaczdIstpF15yDocXBnVR01zdX+Wo0Kv766IqRwUNdpVkcv+85BRsSk+JTtKxiqyRlihdsHaTpYUzw6UC1eyKfQQ9mqmtjig/RpHCTlAgUDTeztK4vaZSlOiSoraTO8Z+STKo6xhWfoeHXkyOpsb0c5Kc+OoG3MtBeuHLCJggZv4Za6d3FZ+i47EZqiy1Yqg1P4K0IqftL5YRLsLXXMehVjn3FRx30qdkJTUDJ1XYuFetqB7xywja4cIo6S0tVfITaBpxUaOhP1xpDaQxzKUS72kgtAl7SpXjXOiRl6FCrZmVCaZrxAhIhZeK3PBzfIa92o1jFV3yCzr/BpAyGL0kB1H2m1O9ZrByzVcrooNrqjFmIl7dUfIAuq31q5NEFqeb8h8HYZGNR3XFP/vbOCWNl/FsengXPzAg5B1PYB3SiBCWlj42KWK1x5NVpcWGtNTWpMPjm1ixmf7wi57IAFyCDpIqCmZd6LynXzLqtDtdImcwrjt4XE9bGC0JZ9FIaRHBEf8NIFc7tohZQVotUqIsdqjKTWsexFGMBX6rU4tb/bdVbtRRNS6oY2T7redTqu+A2yqllJrUMdry9dMqHKf8NhsgYKWGlBHoxeSm5R/IgCRe+62UktQ+mbSz+GMmkQJOuJlULGERbL9PY8u0X8nBW24GrhU5lJHWP3xT2Ro5BaiYUzbdASjhnYbK56Vj2F2q+zWLAlnKnjvzgLfjex5Z4wa1LeOuM1ChhInqWiMsqW4DVig4n/NdP6YHnB9/fk3LBJXs530UihQ1+nwipf4Od+DMKd1tEKVHpd9fugDHVnklZxZgd28T2UkR9azapsXTn2FJRhNR8MEz8NPHepUNP4azV7oBbGKTZ0iQ7tg2Svj2/sh2F2JJU/oFV06tJyRHDJA/G/uUQ87YbQzZrWYiNVDhK0vRTvksVj0uV/59Daxs+lTV5uthqnWeQbgmnpmWlrh9FSJ1FBj8QpFqYb5f8ICiKdyMlMgaJr5kkdRRJb3w1k0YGO3U4pUVMry1VJpSCSlQdSQXhISE1Pa5flVlabl26sjA4PSRWfAlv6tw6KSieWTqSssl1E8O6lC54cuQsoo4wuULbpKDBb1mtr2iBFLkiKJNy4iU5ItzFzUREVq2X7kNZkGV1aG+BFLfYUxvNvIhAQbybm/ZXYoXI4LesuhNtkGK+flpSSQL8PRkzNq1XWSP5otZJBfY9wCmkhsL/uAfJiM5PvNSF1E8tqyN7QYqzjxMvotFlhw/iBdmkww/nx17UQkx6+6R4CQXlWo/Y302i8nX6crf/s81IMm9ZtfytkHLZOa8p5XzCYJ1mvt7TiJO5c5lCyODXASmnLUTrUrY4SO3INfsBINra2rEhB4is1e6AFMdPV6+yzQ6u0qY15Wg2bU0OK0aqHNdbIuWwRrwu9SrH7GCUVrkRCxOOppGgJ1LqHRpWSAGA+sLZwVkaoNFIifdWP1vRFymVI/cMDTBqE5QeOy+C8i6ddUlZa9QXKcXrt8OGYlP14i7zkUm/SLY1tQ9t+d0JqaBRXbwNsPIbE6m3zP+gLD7MY1vd3oOAk94Nqfqv+R3Au3moHyQ9GGVVy5QbuuVX0NQUAbk8NSmnzeoVqs08JLc3B3q4xgRlhNLHpUwi38pLqL8O5PLGDVKiPzDKcxMtpNcv9buRJINmK4SMVJrQcX/5Qqk3Kx1QgNRMSYq66XShyrz7JXs0JFmtyWGkB7OaHOfJvkgeivcqx9V+c+IpFKSc72e+iDWdhmEWt5WVRuvMM54Y15Bk0gQcybGXlL5rIkH+0avV5/ag6gXr7++vWNfr5nG/73+aDmGtQrNC6viS62N4PMbtxG0AjzrIywKzPMZXEfFCKQZNii45tk7nEtGgb/q8u+12O7mWEFieNJ9Psr95otkseo+V/DiimhRdWef+vJyvu3HZ05FwXfebNMnB9L4eICh1moy5y1DLpIr3diL1EKTsW+d9JwdTdwwd+dTFJExSZZbkGPc9TnybKCp6btx1SyFf/RgvhT5TveUKxkJh8l80hT4Zq8TcC20RCYkXcn3ebFBz9IviPV4n4nanjtQ3FoXou1J3qr6xKORJofKkUHlSqDwpVJ4Uqr9Mqpu98aj6y6T+ljwpVJ4UKk8KlSeFypNC5Umh8qRQeVKo/iip/wCzNLq0rrxnawAAAABJRU5ErkJggg==" />
          <Heading textAlign="center" >Ciberbullying </Heading>
          <Link  href="https://www.gob.mx/ciberbullying" isExternal> Enlace Externo <Icon name="external-link" mx="2px"/></Link>     
        </Box>
</Stack>

<Stack w="50%"   
          display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center" 
       
      
      >
        <Box p={5} shadow="md" borderWidth="1px"  rounded="md">
          <Image   src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAPDw8PDxAPDxAQEBUPDxUPDxAPFRUWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0fHiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLTctLf/AABEIAKoBKQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGBAUHAwj/xABAEAABAwIDBQUFBgMHBQAAAAABAAIDBBEFEiEGMUFRYRMicYGRBzKhscEUI0JSYtFygvAkMzRzsuHxFVOSotL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAwEBAQEBAAAAAAAAAQIRAyESMUEyUQRhIv/aAAwDAQACEQMRAD8A6IpBRCmFswMJoCYUJMJgICdkCspBMBMBEgKSQCYUBpoTRJJosmAgaELwrauOFjnyPDGNFyXGwAQe91AztH+y5jtB7SgXFtKy7R+J+gPgB9VrKbbypNy4ssL6WVfKLeFdcZXxk2uRbiWm3qshkgO4grj8W2UzhawAPXLf6rMg2vqGnTIfPKT8dU84nwrrCYVTwLbGOUhkwMUh0F9WuPQhWqN4IuCCOhuFO5VbNJppBNAJoTQCYQE0AmhNArJoTUBJoQgEwhCATQhBXbKQRZSAV1AFIJBSCBhSASCkESAFJCFAFIIQiTTCAmgEIUXusEGvx7GYqSF0sr2tA3X4noBqVxParayavdd144Gn7uO+8/mdzPyXv7SdpBVVPZtdeKAkNsbhzuLvhp4KrMYSMx/fessst9NcMfqLHEnW3zU5HnNdzrAbrcTzWPke46bv0lektNcb7O6+KovpmU9TFxJJ6vtfyC3FKwFtwd/DNf6fVU2SjkaM1jZe1FXvjOhNuPGyjS0y/sXWOTLoVcNl9p3REMkcXxnS595vnxCp2GVzZ2We1rzY/pdoOHNGbszmaS6Mmxv7zTyKjysWuMsd6glDgHNNwRcEbiOa9VRNh8c3QPcLEXj14HlzV7C6Mctzbmyx8bo00gpKVQmkmgaEJqAITQgSaEIkITQgEJhCDQWTCE1dmYCkAkFIBEgBSCAE1AEwhNEhNCYQNCE0CXPvajtd9niNJA8CaVvfI3xxn5OPD1V2xWvZTwvmebNjaXHrbgvmzHK51RNJO93fkcXEcr8FTPLS+GO+2ujN3XOnO+9biYdyNgv3xc6LSB58forLhMBkEZOuVuXr/X7LHK6b4TbJwnAAd2nHerZBssyRoD9dNDuISwuHKR4K00YuAst10eMitjY9u4a+K0eM7AOvePdxC6pBFuWwZSgjcrTatmL53kop6CQOLCWg6i5yuH0PUWVko6mGUskBPZydyUG1234nqND1t5LqOM7ORTsc0tBuFx7EMGko5J49bDvxjg9n4m+O4jwS/wAqNT3FiihdTSBhO4kxnqPw3XUtn8SE8LXX7wADvHmuMT4r2tNFJe5bl+IsVZNjdoOzcDvY7R3Tr/XVX48tM+XHbrAKkvGCUPaHNIIO4hey6HKaaSagNCEIk0ITCAQhCATCQTCBoQhBoU0Jq7MwpBRCmESYTCAmFAEwhMIkBNCaAQgJPcACTuAug557X8S7OCOAEXldqP0jX52XG5m8XZAd+gJurX7ScRfJWF7s3ea0RgndHa7dOt7+apMzxqSb3BH7lYZd5OjH/wA4smhgbK/K1w373aC/IBXzCaPs2gEarXbHYOW0mZ7W9pVnLHcAkDgbdPeW3rhJTvdG1hfktex4EXBAO7wWeTfCdbbuibuVhoGKmYXjcTiGvvE79W4+fBXDDKhpsQQ4H8puFEi9bynj3LZQjRYEEg08LrLik0V4yrKyKnbcYB20Zewd9ouPJXBki86otIsSNUym4jC6r5vqLxRSMP57gchdtx63Xrs7WkFzb8dPG+7+uZVtqNjTVVOJMJcIoXF7C0j+8kY1zWnpcOP/ACud4XIQ4HcdAfG37lVk6Wy9u6bB4xn+6J4Af/J+h8leFw7ZOuLKmE+6HOLCRwd/zYrt8L8zQ7mAVtx3cc3LNVMJoCauzCaEIk0IQgaEIQCaEIBNJNBoUwkmFdmkFMKIUgiTCaAmFAEwhNEgJoCaAXhVju25kA+BNive6x6w9w9NfTVBwv2rx5apo/K3JusSABbyVO2fwt1bVMh3NHekI/Cwb/2Vz9qMv2mra2FpfJZrLAauPA9NFs9itmDFeMal5b27wDx3Rg+q57lrbpxxt0sOzuGZpmuy/cwtyx33G29w+Sr+OVp+1TztGaPtMunJvdv63XTJgBlpYxqW/eFptkZbcDwJ+XkqTNhsbTPBFYsY9zG371rbx1sbjyWVmo6ce9sKgjhqrZmNdcaHcfgiswj7Oc8Uj4iNdHaLR0tHXUsp+zsztJ0BGgvyK3TIKyQZ6xzWt4MjaNR+om/wU+PSsvfpYtnMWdIC1z88lw07gLdAOCsONds2NphLGH8Rfw5WVI2Lhy1Q0sDw5AHRdGxyj7aJ7QbHKcptcNdwNuKT0nLqxVYWVUxsawjXURtsPDet5S4OxoBfI+Q8e9bVUSjx6ejmcyoppHZTo+IHK8Wvex3K+4LO6WN1U9rmgNc5rHaWAF7nqVMl+q2z49sDp2h1XYWLpyTc3uAxjQD5N+K4HtbhjqPEqqFzcgM75ouRilcXNI6alv8AKvoGhi7OQuJJbUHP0a+wzNHTiPFUn21bOOnhjrYAXS0jS2RrRcyU5N79S0gnwLlM9K5+1DwecZ2PvazmEjwPPwXf8MlzRjjoPQ6hfMOD1ZzZb9R67vRfRGxdQZKWJx32LT5FX47q6Zck3NrEmkE1qwMJpJokJpJoBAQmgE0k0AhCEGgCkFBSBV2aYUwvMFSBRKYKYUAVIFBNNQCkFAkE0gmiQVpNqK4xQPyDNI4WYOq29TKGMe87mMc8+DRf6KgR4iap4aScxF3Hg2/4W8gFnyZ+Ma8WHlWpwDAnGQ3OeeTWV+/I065Gq8/dUbGxRNBlffI3rxc7ooRdnSQ90Z5X+6OLnHn0WVgmG5Q6ondd7gXSPcbANGtv0tC55HTdMTEahtBSvqCc08pyszHV8zunIAE25BVHAXG3eJJJuSd5J1JKrW0u1n/UcUaYnH7JDnhpxuDuLprfqLdOgHVWLCzYhVz6um/D3jasjYAVg4o4MaVnQv0Wh2gJc5oJysucx1I6XtwU76PHtl7JMzVAfbQi3xXSG2N1Qdj6iMmw3sIGotcdFeBMHEtaCC0Am4OXXruKtgz5Yf2Jl75R5hOpYGxPFgBkcNNBuU4pOa1W1mJNgpZZCfdY4/BXutM8ZdsTZHEG1VFHY95vcceIljOU/EFby2Ym4BGocCLm3ELh3sZ2mMdRLSzGwqXumj5CS13D0sf5Su2SSFrRJyAD7brfmWV66q1vl3Prj23fs/dRzfbKQF1I995GDU0xJ3jnHr/L4buiezp16MD8r3D4lWMuDgdxa4WIOo1+ix8LwuOna8QjKx7i7LwaenRXx/UrPP8ANjZhNIKS6HME0k0AmEkwgE0kIGhCAgaEIQV9ASQtGaYKkCvO6kCg9ApBeYKkFCUwVMFeYUggmFIKAKkFCWs2oqOzoqh3OMsHi+zfquZYdKY++Fc/aNV2gigB1mkzH+Bg1+Jb6KqYPSmV4H4QuTnu8tOz/PNY7XHZyHtQ18mp368Oi0Ptzx3sKOKhjJa6rLnSZTb+zstdv8zi0eAKvOC0oa0dAuF+1+ofPicz7kxxBsEetwMg74H85epxmojK7vSk4ZV9lK2T8LXAnwB4fFdhoCLNcNQQCDzB3FcUkPBdH2AxXPEIHnWLRh5s4N8Qq8uP1p/nz1bivrpMrM25oGp5LBZVxSmwe1w6EH5LJZNduXgVqThgEhc0b9+lwfqs5XRpaMFZTN91zA8Oub6G3G11aW4hFb32jxOX5qoYbQxutZr78Q10lj8VZaWhy2u3dzNz8dVrP+KcmOP9e7awON2kEcSNy577X8Vy0TmX1lIiaL77+98AfRXyteGAk2GmvAL579oe0Qram0ZvBDdsZG57vxSeHAf7pN2srZI0OHSvikZLGcr43te0/qH0X0tshiwqqWKW1hLG1xB4XGo6r5tMXdA5hdg9keIE0ohJOaF7mj+EnM0eh+Ci3dJOnS6eHISPw/h6DksqQ6Hwuos1aEE6J6Vvb0ifcAr0C0lNO+AlrwTHfRw1yjr0W6Y4EXG4roxy3HNljqpIQmrKhCaEAhCaBJoQgEITQVxCELRmakFFSCCQUgohSCCSkFAKQUJTCmF5hSLgASdABcnkBvUDm+29QZa5zBuhYyMeJGZx/wDa3ktzs/h+Rg01ctHhkRqqmSW2j5XP15FxPyXRaWkAa0W3Li/WVrv/ADjIlJN2FPJJ/wBuNzvMC4+K+ftpJiYS52rpHl9+NuJPiV2j2iVfY0DgHWMjms6kak29AuG4zHJOQ1gyxhrW3O8gdFfKqYyqg833K07KxFtydCbfBY9PgoaeZ6rfUFIWWNlTPklmo04+Oy7q10NSbAO38+fit3SWK09DRlzdFsqSle06ErKV01ZsOs2y25qAG3JsAFoaan01JPmpzt04+t1r56jGzdUv2qYpI6me1jixjnBrrGxc3kenRchp4Q6wXatp8M+0QPj5jTxG5cypsBlY/QHR2oIVcc+qjPDuaYzqc23e78lb/Z5UmKe3CQD/AMm6j4ErTRU0rHuDoyWWJB3/AAWfg7DTzNztIFw5txvbxHofks7e9tJOtO60M12hZLhxWiwao7o1uLaeC3VPJcFb3tz61SmA7N19wDr+inhjC2KMHfkbf0XhW3ylg3vcG/v8FnsbYDoLLfC7jnzmqmEJJq6hoQhA0IQgEJJoAJpBNBXE0k1oyNSCimESkmFEKQQSCkFBDngAkmwAuTyAUJSc8NBLiABvJNgFWtqNpIPs00UMmeR7cgyg2AcQHG+7ddVrHcafVykAkQtNmN3A/qPMrWV7Mojb+Y38gubPm+R1cfB1urfsZCBFm4k2V6ph3VTtlWWjYOXzKucQ7vksuNryqttfhP2xlxcuhzGMcD+YEczb4Lmb4LmwFl2+mh7qoW1+B9jP2zBaOYk9A/iPPf6rTm45rcV/z8m7qqlFh/RZklBZu5bSmjCyJYwQANy5XbpPZyxGU8FvH09iq7hZ7Oa3Mq4uZcAq2PbPLp4xN0UZRovU6KDtQpqrXzRXKwJ8PbmzALbyaLGdMDos9NY1NFSdrPHCGi3ekf0YDu9SFt6rAoaqN8OjHxuD4nAasda3mOYWw2Wp2k1EtuIjabcG6m3mfgsKt7WGVpis9wJ0vYuF9y6cOOTCXTk5OTedkrDw6qkhvDMAyRhs4XsDyc39J/fkrXhr+7dazGXR1FOZHxuinhbmAkaWvAuMzQfxA9OSysAfeMeCrZq62t5eWO9dtsbAg8FkNN9yx3Dup0x4ei148tXTHkx3NshNJNbMDQkgIJISTQJNCEAE0gmgrgTUU1qySQEgpBQGpBRUgiTWj2yq+ypHgGxlIj8jqfgFvFTfaLNpBHzL3n4AfVU5LrGtOObyis4ey5RipvUNb+RjR5nX6r0wreFjk56l5/XbyGn0XnPSdA2Yb3G+Ct0fuqt7PRWa3wVlbuW3HOmHL7KkHvDkVjYxhwqIXxG1yLsPJ43H6eayoNJZG/pBXvZdV7cs3PTlbaVzSQQQRcEciF7NjIVq2gw8CQSgaSe9/GP3WCymHJcGWOrp6eHJLNq5LGQ4OHAq3Uk2aNp6arBlohZZNDFZpCnGWVOdliVZMGi91jPrBbTVY2JMc45QV6w0YDQlt2iYyTt4SykrEezQuvu1WwmjARRUvaysjtoXZnfwN1ProPNVmO7pa5alrcYdTmCmjb+LLmd/E7U/ErSTPL5xc7iN3irTiDQWqr0utSehC7tamnmS7trf4zD/AGd4uT90/wD0la/Z2TugdFu8Y1YW/od8QqzgMtgFjze5W3D3jYt+8Lzj3+BU6d12qDd5Cr9lT80y0JNOia6nKE0IQCE0IBCEIAJpJoK2mEkwtWSQCkEgmFAFIKKkESaoPtEd9/EOUN/Vzv2V+VA9of8AiY/8gf63rLm/Dbg/bS0EuXXkL+ieCRZn333N/NYrPcd/CVtdnBqPELhrvdGwVlmjwW64LU4VuC2oW2Hpz5+0mf4jxi+R/wB1kFY7f8QP8o/6gsg8V0Od41dOJI3N4nd0I3KtgW6WVrbuVexIfeu8foseafXRwX3GKTzSa+yg9AWErorzlbrdJt16uQ3iidsOYLdbPUmVhlcO9Jo3pGN3rv8ARaep3eatzhp6LXhxm9sefO60xavcVWKNtpnnqrPVblXYf7x66K5YsVabnxA+SqOEm3qrXVfh8lUcN94+Kx5/jfg9VdKB+i9HizgsbDtwWXUcPFU+LfXtHuCmoR7lNdU9OXL2EICaICEIQCE0igEICaD/2Q==" />
          <Heading textAlign="center" >Estres</Heading>
          <Link  href="https://www.elpradopsicologos.es/ansiedad/estres/" isExternal> Enlace Externo <Icon name="external-link" mx="2px"/></Link>         
        </Box>
</Stack>

<Stack w="50%"   
        display="flex"
      alignItems="center"
      justifyContent="center" 
      
      >
        <Box p={5} shadow="md" borderWidth="1px"  rounded="md">
          <Image   src="data:image/jpeg;base64,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" />
          <Heading textAlign="center" >Enojo / Furia</Heading>
          <Link  href="https://www.apa.org/centrodeapoyo/enojo" isExternal> Enlace Externo <Icon name="external-link" mx="2px"/></Link>
        </Box>
</Stack>


    
</Box>
  
      </Grid>
   
    </Fragment>
  );
}

export default Dinamic;

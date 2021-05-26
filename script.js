$("#form").submit(function(e){
    e.preventDefault()

    var query =$("#search").val()

    var result=''

    var API_KEY = 'b948373430de1ee833e70d30bab1b817'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY+ '&type=web&query='+ query

    $.get(url,function(data){

        $("#result").html('')

        console.log(data)

        data.organic_results.forEach(res => {
            
            result= `

             <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
             <p>${res.snippet}</p>
             <p>${res.domain}</p>

             `

             $("#result").append(result)
        });
    })


})
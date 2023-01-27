$(function () {

    $(".btn").on("click", starwars,);
    const star = "https://swapi.dev/api/people/"

    function starwars() {

        let id = Math.floor(Math.random() * 83);
        fetch(star + id)
            .then((Response) => {
                if (!Response.ok) {
                    throw new Error(Response.status)
                } else {
                    return Response.json()
                }
            })
            .then((data) => {
                console.log(data);

                $(".name").text(data.name);
                $(".gender").text(data.gender);
                $(".height").text(data.height);
                $(".mass").text(data.mass);
                $(".birthyear").text(data.birth_year);
                $(".eyecolor").text(data.eye_color);


            })
            .catch(Error => console.log(!"somethingfjerikfe" + Error));

    }

})



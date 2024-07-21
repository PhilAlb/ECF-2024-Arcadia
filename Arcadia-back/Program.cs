using ArcadiaBack;

var builder = WebApplication.CreateBuilder(args);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
        }
    );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

/*app.UseAuthorization();*/

app.MapGet("/habitats", () =>
    new List<CardDto>
    {
        new()
        {
            Url = "assets/images/habitats/savannah1.jpg",
            Title = "Savane",
            VerticalPosition = "32%"
        },
        new() { Url = "assets/images/habitats/jungle1.webp", Title = "Jungle", },
        new()
        {
            Url = "assets/images/habitats/farm1.jpg",
            Title = "Ferme",
            VerticalPosition = "25%"
        },
    }
);

app.MapGet("/animals", () =>
    new List<CarouselAnimalDto>
    {
        new() { Url = "assets/images/carousel/lion1.jpg", AnimalName = "lion", },
        new() { Url = "assets/images/carousel/tiger1.jpg", AnimalName = "tiger-image", },
        new() { Url = "assets/images/carousel/monkey1.jpg", AnimalName = "monkey-image", },
        new() { Url = "assets/images/carousel/panda1.jpg", AnimalName = "panda-image", },
        new() { Url = "assets/images/carousel/goat1.jpg", AnimalName = "goat-image", },
    }
);

app.MapGet("/services", () =>
    new List<CardDto>
    {
        new()
        {
            Url = "assets/images/services/restauration1.webp",
            Title = "Restauration",
            VerticalPosition = "70%"
        },
        new()
        {
            Url = "assets/images/services/visit1.jpg",
            Title = "Visite guidée",
            VerticalPosition = "35%"
        },
        new()
        {
            Url = "assets/images/services/train1.webp",
            Title = "Visite en train",
            VerticalPosition = "65%"
        },
    }
);

app.MapGet("/testimonies", () =>
    new List<CardTestimonyDto>{
        new(){
            Title = "\"Un après-midi magique\"",
            Message = "Un après-midi magique dans un zoo immersif qui nous permet d'être au plus près des animaux de les voir évoluer dans un cadre 100 % adapté. Leur histoire touchante nous est comptée sur les panneaux d'information tout au long du parc."
        },
        new(){
            Title = "\"Zoo immense\"",
            Message = "Zoo immense, les animaux semblent très bien traités, on a vu le personnel au petits soins et tendre avec les animaux notamment avec les singes qui le rendent donc super ambiance, et moment agréable en famille. Tarif abordable."
        },
        new(){
            Title = "\"Superbe zoo\"",
            Message = "Superbe zoo. Des enclos bien entretenus et des grands espaces. Des animaux en bonne santé et beaucoup d'espèces. Espace pique nique, toilettes, buvettes, snack et boutique dans le parc. Je recommande fortement !"
        }
    }
);

app.Run();

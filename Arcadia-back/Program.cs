using ArcadiaBack;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using static System.Collections.Specialized.BitVector32;
using System.ComponentModel;
using System;

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
    new List<CardServicesDto>
    {
        new()
        {
            Url = "assets/images/services/restauration1.webp",
            Title = "Restauration",
            Description = "Découvrez notre offre de restauration avec des plats délicieux et variés pour tous les goûts. Notre restaurant propose une sélection de mets allant des sandwichs rapides aux repas gastronomiques. Nous utilisons des ingrédients frais et locaux pour garantir une qualité optimale.",
            VerticalPosition = "70%",
            Schedules= "Lundi-Dimanche: 10h00 - 20h00"
        },
        new()
        {
            Url = "assets/images/services/visit1.jpg",
            Title = "Visite guidée",
            Description = "Participez à nos visites guidées pour découvrir les secrets du zoo et de ses habitants. Nos guides experts vous emmèneront à travers les différentes sections du zoo, vous donnant un aperçu unique de la vie des animaux et de leur habitat naturel. Lors de la visite, vous apprendrez des faits fascinants sur les animaux, leurs comportements, et leurs histoires individuelles. Vous aurez également l'occasion d'assister à des sessions d'alimentation et à des présentations éducatives qui ne sont pas disponibles pour le public général.",
            VerticalPosition = "35%",
            Schedules= "Lundi-Samedi: 10h00 - 18h00"
        },
        new()
        {
            Url = "assets/images/services/train1.webp",
            Title = "Visite en train",
            Description = "Profitez d'une visite confortable et amusante à bord de notre petit train à travers le zoo. Cette expérience est idéale pour les familles avec enfants, les personnes âgées ou toute personne souhaitant découvrir le zoo sans trop marcher. Le petit train vous emmènera dans un voyage pittoresque à travers les différentes zones du zoo, vous offrant une vue d'ensemble de nos attractions principales.",
            VerticalPosition = "65%",
            Schedules= "Lundi-Vendredi: 10h00 - 16h00"
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

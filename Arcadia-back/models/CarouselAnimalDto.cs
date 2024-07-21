using System.ComponentModel.DataAnnotations;

namespace ArcadiaBack
{
    public class CarouselAnimalDto
    {
        [Required]
        public string AnimalName { get; set; }
        [Required]
        public string Url { get; set; }
    }
}

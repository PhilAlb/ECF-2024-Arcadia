using System.ComponentModel.DataAnnotations;

namespace ArcadiaBack
{
    public class CardServicesDto : CardDto
    {
        [Required]
        public string Schedules { get; set; }
        
        [Required]
        public string Description { get; set; }

    }
}

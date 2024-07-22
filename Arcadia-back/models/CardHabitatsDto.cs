using System.ComponentModel.DataAnnotations;

namespace ArcadiaBack
{
    public class CardHabitatsDto : CardDto
    {
        [Required]
        public string Description { get; set; }

        [Required]
        public string Animals { get; set; }


    }
}

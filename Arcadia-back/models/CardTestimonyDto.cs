using System.ComponentModel.DataAnnotations;

namespace ArcadiaBack
{
    public class CardTestimonyDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Message { get; set; }
    }
}

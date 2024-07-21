namespace ArcadiaBack
{
    public class Habitat
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<string> images { get; set; }
        public ICollection<Animal> animals { get; set; }
    }
}
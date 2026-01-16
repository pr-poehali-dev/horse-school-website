import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Trophy',
      title: 'Спортивная подготовка',
      description: 'Профессиональные тренировки для будущих чемпионов. Индивидуальный подход к каждому юному спортсмену.',
      features: ['Конкур', 'Выездка', 'Троеборье']
    },
    {
      icon: 'Users',
      title: 'Групповые занятия',
      description: 'Занятия в небольших группах для детей всех возрастов. Учим работать в команде и общаться с лошадьми.',
      features: ['До 6 человек', 'По возрастам', 'Игровой формат']
    },
    {
      icon: 'Heart',
      title: 'Иппотерапия',
      description: 'Лечебная верховая езда для детей. Развиваем координацию, уверенность и эмоциональный интеллект.',
      features: ['Опытные специалисты', 'Спокойные лошади', 'Безопасно']
    },
    {
      icon: 'Star',
      title: 'Летний лагерь',
      description: 'Незабываемое лето с лошадьми! Тренировки, игры, новые друзья и море впечатлений в Сочи.',
      features: ['2-4 недели', 'Полный пансион', 'Экскурсии']
    }
  ];

  const trainers = [
    {
      name: 'Анна Соколова',
      role: 'Главный тренер',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/dd306050-53cf-403c-a343-291a110bfe00.jpg',
      achievements: 'Мастер спорта, чемпионка России по конкуру'
    },
    {
      name: 'Дмитрий Волков',
      role: 'Тренер по выездке',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/f950a7eb-607e-4f16-9e4a-53b2c7713346.jpg',
      achievements: 'КМС, специализация на работе с детьми'
    },
    {
      name: 'Елена Петрова',
      role: 'Тренер-инструктор',
      experience: '8 лет опыта',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/2a26053c-8f5d-48f2-b56e-7fb6d088e8fe.jpg',
      achievements: 'Специалист по иппотерапии'
    }
  ];

  const horses = [
    {
      name: 'Граф',
      breed: 'Тракененская',
      age: '8 лет',
      specialty: 'Конкур',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/f950a7eb-607e-4f16-9e4a-53b2c7713346.jpg'
    },
    {
      name: 'Белла',
      breed: 'Ганноверская',
      age: '6 лет',
      specialty: 'Выездка',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/2a26053c-8f5d-48f2-b56e-7fb6d088e8fe.jpg'
    },
    {
      name: 'Байкал',
      breed: 'Орловский рысак',
      age: '10 лет',
      specialty: 'Обучение',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/f950a7eb-607e-4f16-9e4a-53b2c7713346.jpg'
    },
    {
      name: 'Злата',
      breed: 'Буденновская',
      age: '7 лет',
      specialty: 'Троеборье',
      image: 'https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/2a26053c-8f5d-48f2-b56e-7fb6d088e8fe.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Horse" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Equestrian Elite</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#trainers" className="hover:text-primary transition-colors">Тренеры</a>
              <a href="#horses" className="hover:text-primary transition-colors">Лошади</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Записаться</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Путь к победам <span className="text-primary">начинается здесь</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Конная школа премиум-класса в Сочи. 100 лошадей, крытый манеж, профессиональные тренеры. 
                Растим будущих чемпионов с любовью и заботой.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Записаться на занятие
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Виртуальный тур
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-4xl font-bold text-primary">100</div>
                  <div className="text-muted-foreground">лошадей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">учеников</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/f491646f-8c3e-45ff-92b9-8959f7b8f101/files/f950a7eb-607e-4f16-9e4a-53b2c7713346.jpg" 
                alt="Лошадь" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={32} className="text-primary" />
                  <div>
                    <div className="font-bold">Лучшая школа</div>
                    <div className="text-sm text-muted-foreground">Южный регион 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Icon name="Home" size={40} className="mx-auto text-primary" />
              <h3 className="font-semibold text-lg">Крытый манеж</h3>
              <p className="text-muted-foreground">Тренировки в любую погоду</p>
            </div>
            <div className="space-y-2">
              <Icon name="Coffee" size={40} className="mx-auto text-primary" />
              <h3 className="font-semibold text-lg">Кафе на территории</h3>
              <p className="text-muted-foreground">Комфорт для родителей</p>
            </div>
            <div className="space-y-2">
              <Icon name="Trees" size={40} className="mx-auto text-primary" />
              <h3 className="font-semibold text-lg">Пастбища</h3>
              <p className="text-muted-foreground">Просторные загоны</p>
            </div>
            <div className="space-y-2">
              <Icon name="Shield" size={40} className="mx-auto text-primary" />
              <h3 className="font-semibold text-lg">Безопасность</h3>
              <p className="text-muted-foreground">Полная страховка</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши программы</h2>
            <p className="text-xl text-muted-foreground">Индивидуальный подход к каждому ученику</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши тренеры</h2>
            <p className="text-xl text-muted-foreground">Профессионалы с мировым опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold">{trainer.name}</h3>
                    <p className="text-primary-foreground/90">{trainer.role}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{trainer.experience}</span>
                  </div>
                  <p className="text-sm">{trainer.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="horses" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши лошади</h2>
            <p className="text-xl text-muted-foreground">100 голов лучших пород для обучения и спорта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {horses.map((horse, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative h-64">
                  <img 
                    src={horse.image} 
                    alt={horse.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{horse.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{horse.breed}</p>
                    <p>{horse.age}</p>
                    <div className="pt-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {horse.specialty}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">И ещё 96 прекрасных лошадей ждут вас!</p>
            <Button variant="outline" size="lg">Посмотреть всех лошадей</Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Запишитесь на первое пробное занятие или задайте любые вопросы о нашей школе
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Сочи, Адлерский район, ул. Конная, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (918) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@equestrian-elite.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Ежедневно: 8:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем ребенке и целях обучения..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Horse" size={32} />
                <span className="text-xl font-bold">Equestrian Elite</span>
              </div>
              <p className="text-primary-foreground/80">
                Конная школа премиум-класса в Сочи
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <a href="#home" className="block hover:text-primary-foreground transition-colors">Главная</a>
                <a href="#services" className="block hover:text-primary-foreground transition-colors">Услуги</a>
                <a href="#trainers" className="block hover:text-primary-foreground transition-colors">Тренеры</a>
                <a href="#horses" className="block hover:text-primary-foreground transition-colors">Лошади</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>г. Сочи</p>
                <p>+7 (918) 123-45-67</p>
                <p>info@equestrian-elite.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Equestrian Elite. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

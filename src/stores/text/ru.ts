import type { IText } from '@/stores/text/interface';

export const ru: IText = {
  title: 'ySkills | Ваш гид в профессиональную карьеру',
  home: {
    menu: {
      about: 'О нас',
      home: 'Главная',
      contacts: 'Контакты',
      blog: 'Блог',
      auth: 'Логин'
    },
    about: {
      who: 'Немного о ySkills',
      whoDescription:
        'ySkills - это ваш помощник в мир вашего профессионализма. Наш сервис поможет узнать, какие знания и умения нужны джуниору, мидлу, сеньору и тим-лиду на <span class="underline-text">любой позиции</span> в IT. Также вы сможете настроить свою резюме, которе будет включать ваш уровень по мнению сервиса, отзывы от руководителей и коллег и пройденные этапы вашего обучения.',
      goals: 'Наши цели',
      goalsDescription:
        'Цель нашей команды - сделать самый удобный сервис <span class="underline-text">самообразования</span> с возможностью без проблем доказать свой уровень потенциальному работодателю. Мы стремимся сделать платформу, которой будут доверять многие разработчики, менеджеры и компании. Самотестирование способно указать на ваши слабые места, а отзывы ваших коллег позволят обратить внимание на то, что надо доработать в софтскиллах. Также, мы хотим чтобы нашу платформу использовали большие компании для <span class="underline-text">оценки своих сотрудников</span>, ведь в данном сервисе можно без проблем наблюдать за ростом разработчика!'
    },
    home: {
      title: 'ySkills - ваш проводник в профессиональную карьеру',
      description:
        'Позвольте себе возможность постоянного развития с фиксанией результатов и получения доверенного резюме, которое будет цениться во всем мире. Дайте возможность вашей компании и коллегам оценивать вас, продвигая по карьерной лестнице!',
      button: 'начать',
      more: 'узнать больше'
    }
  },
  empty: {
    title: 'Пусто',
    description: 'Похоже, здесь ничего нет'
  }
};

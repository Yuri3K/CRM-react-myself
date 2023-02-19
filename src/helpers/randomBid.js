class userBid {
  constructor(name, phone, email, course) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.course = course;
  }
}

const names = [
  'Роман Росляк',
  'Максим Белоусов',
  'Евгения Покровая',
  'Максим Токман',
  'Татьяна Мацкевич',
  'Роман Бланяр',
  'Юлия Радионова',
  'Юрий Сидоренко',
  'Олег Шевченко',
  'Виктория Блажевич'
];

const phones = [
  '+380664554123',
  '+380991124893',
  '+380672268107',
  '+380989013589',
  '+380734206877',
  '+380630025489',
  '+380445624445',
  '+380991320157',
  '+380634541354',
  '+380734651548',
];

const emails = [
  'romanroslyak@gmail.com',
  'maxbeloysov@gmail.com',
  'evheniapokrova@gmail.com',
  'maxtokman@gmail.com',
  'tatianamatskevich@gmail.com',
  'romanblaniar@gmail.com',
  'juliaradionova@gmail.com',
  'yurijsidorenko@gmail.com',
  'olegshevcenko@gmail.com',
  'viktoriablajevich@gmail.com',
]

const courses = [
  'course-html',
  'course-js',
  'course-vue',
  'course-php',
  'course-wordpress',
]

const randomValue = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

export const randomBid = new userBid(randomValue(names), randomValue(phones), randomValue(emails), randomValue(courses))
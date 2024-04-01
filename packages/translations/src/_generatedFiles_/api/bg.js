export default {
  authentication: {
    account: 'Профил',
    apiKey: 'API ключ',
    enableAPIKey: 'Активирай API ключ',
    loggedInChangePassword:
      'За да промениш паролата си, отиди в своя <0>профил</0> и я промени оттам.',
    newAccountCreated:
      'Току-що беше създаден нов профил за достъп до <a href="{{serverURL}}">{{serverURL}}</a> Моля, въведи връзката в браузъра си, за да потвърдиш имейла си: <a href="{{verificationURL}}">{{verificationURL}}</a><br> След като потвърдиш имейла си, ще можеш да влезеш успешно.',
    resetYourPassword: 'Възстанови паролата си',
    verified: 'Потвърден',
    verifyYourEmail: 'Потвърди имейла си',
    youAreReceivingResetPassword:
      'Получаваш това, защото ти (или някой друг) е заявил възстановяване на паролата. Натисни връзката или постави това в браузъра си, за да довършиш процеса:',
    youDidNotRequestPassword:
      'Ако не си заявил това, игнорирай този имейл и паролата ти ще остане непроменена.',
  },
  error: {
    deletingFile: 'Имаше грешка при изтриването на файла.',
    emailOrPasswordIncorrect: 'Имейлът или паролата не са правилни.',
    followingFieldsInvalid_one: 'Следното поле е некоректно:',
    followingFieldsInvalid_other: 'Следните полета са некоректни:',
    noFilesUploaded: 'Никакви файлове не бяха качени.',
    notAllowedToPerformAction: 'Нямаш право да извършиш това действие.',
    problemUploadingFile: 'Имаше проблем при качването на файла.',
    unableToDeleteCount: 'Не беше възможно да се изтрият {{count}} от {{total}} {{label}}.',
    unableToUpdateCount: 'Не беше възможно да се обновят {{count}} от {{total}} {{label}}.',
    unauthorized: 'Неавторизиран, трябва да влезеш, за да извършиш тази заявка.',
    userLocked: 'Този потребител има прекалено много невалидни опити за влизане и е заключен.',
    valueMustBeUnique: 'Стойността трябва да е уникална',
  },
  fields: {
    chooseBetweenCustomTextOrDocument:
      'Избери между това да въведеш текстова връзка или да свържеш с друг документ.',
    chooseDocumentToLink: 'Избери документ, с който да свържеш',
    customURL: 'Връзка',
    enterURL: 'Въведи връзка',
    internalLink: 'Вътрешна връзка',
    linkType: 'Тип на връзката',
    openInNewTab: 'Отвори в нов раздел',
    textToDisplay: 'Текст към дисплей',
  },
  general: {
    copy: 'Копирай',
    createdAt: 'Създаден на',
    deletedCountSuccessfully: 'Изтрити {{count}} {{label}} успешно.',
    deletedSuccessfully: 'Изтрито успешно.',
    email: 'Имейл',
    notFound: 'Няма открит',
    row: 'ред',
    rows: 'Редове',
    successfullyCreated: '{{label}} успешно създаден.',
    successfullyDuplicated: '{{label}} успешно дупликиран.',
    thisLanguage: 'Български',
    updatedAt: 'Обновен на',
    updatedCountSuccessfully: 'Обновени {{count}} {{label}} успешно.',
    updatedSuccessfully: 'Обновен успешно.',
    user: 'Потребител',
    users: 'Потребители',
    value: 'Стойност',
  },
  upload: {
    fileName: 'Име на файла',
    fileSize: 'Големина на файла',
    height: 'Височина',
    sizes: 'Големини',
    width: 'Ширина',
  },
  validation: {
    emailAddress: 'Моля, въведи валиден имейл адрес.',
    enterNumber: 'Моля, въведи валиден номер.',
    greaterThanMax: '{{value}} е по-голямо от максимално допустимото {{label}} от {{max}}.',
    invalidInput: 'Това поле има невалиден вход.',
    invalidSelection: 'Това поле има невалидна селекция.',
    invalidSelections: 'Това поле има следните невалидни селекции:',
    lessThanMin: '{{value}} е по-малко от минимално допустимото {{label}} от {{min}}.',
    longerThanMin:
      'Тази стойност трябва да е по-голяма от минималната стойност от {{minLength}} символа.',
    notValidDate: '"{{value}}" не е валидна дата.',
    required: 'Това поле е задължително.',
    requiresAtLeast: 'Това поле изисква поне {{count}} {{label}}.',
    requiresNoMoreThan: 'Това поле изисква не повече от {{count}} {{label}}.',
    requiresTwoNumbers: 'Това поле изисква 2 числа.',
    shorterThanMax:
      'Тази стойност трябва да е по-малка от максималната стойност от {{maxLength}} символа.',
    trueOrFalse: 'Това поле може да бъде само "true" или "false".',
    validUploadID: 'Това поле не е валиден идентификатор на качването.',
  },
  version: {
    autosavedSuccessfully: 'Успешно автоматично запазване.',
    draft: 'Чернова',
    draftSavedSuccessfully: 'Чернова запазена успешно.',
    published: 'Публикувано',
    restoredSuccessfully: 'Успешно възстановяване.',
    status: 'Статус',
  },
}

---
title: Directives
---

### Что такое директивын?

Директивы это специальные атрибуты с префиксом `v-` позволяющие динамически управлять DOM деревом на основе реактивных зависимостей.  
Директивы подразделяются на встроенные и пользовательские.

### Для чего нужны пользовательские директивы?

Кастомные, они же пользовательские, директивы позволяют создавать переиспользуемую логику управления DOM деревом.  
Используются только тогда, когда нет возможности достичь нужного функционала встроенными директивами.  
Мне нравится использовать кастомные директивы для расширения обработчиков событий, то есть если не существyет нужного события, например события, когда страница проскролена до конца, или событие появления скролла, то я использую кастомные директивы с синтаксисом `v-on-scrollbar-active="someFunction"` или `v-on-scrollbar-on-bottom="someFunction"`

### Перечислите встроенные директивы?

-   Для управлением отображения элементов используются  
    `v-if` - управляет наличием в DOM дереве компонента в зависимости от булева значения  
    `v-show` - управляет отображением компонента

-   Для связывания данных с DOM элементами используюся  
    `v-bind` - односторонняя привязка реактивных данных к DOM элементу  
    `v-model` - двусторонняя привязка данных между моделью и представлением

-   Для итераций используется класcический цикл `for`  
    `v-for` - классический цикл

-   Для обработки событий  
    `v-on` - добавляет событие

-   Для управления содержимым компонента/DOM элемента  
    `v-slot` - содержит идентификатор для именованного слота  
    `v-text` - аналог интерполяции, выводит данные в разметку  
    `v-html` - позволяет вставлять html код, использовать не рекомендуется

-   Для оптимизации производительности  
    `v-once` - позволяет отрисовать элемент или компонент только один раз, последующие обновления будут игнорировать элемент с такой директивой, используется для оптимизации производительности  
    `v-memo` <Badge type="tip" text="v3.2+" vertical="middle" /> - позволяет мемоизировать массив переданных значений, используется как микрооптимизация  
    `v-cloak` - Используется для скрытия еще нескомпилированного шаблона до тех пор, пока он не будет готов  
    `v-pre` - позволяет пропустить DOM элемент на этапе компиляции

### Чем различаются `v-if` и `v-show` и когда что использовать

`v-if` полностью удаляет компонент из DOM-дерева и добавляет его обратно, когда условие становится истинным. Это может быть затратным для производительности при частых изменениях, так как при каждом добавлении или удалении происходит перерисовка и обновление виртуального DOM.  
Однако `v-if` использует механизм ленивой отрисовки — элемент не будет добавлен в DOM, если условие ложное с самого начала.

`v-show` всегда отрисовывает элемент в DOM дереве, но просто скрывает его с помощью `display: none;`  
Используется при частом переключении видимости элемента.

### v-bind

Односторонее связывание данных между атрибутами и свойствами компонента.  
Имеет сокращенную записать в виде двоеточия `:`  
Приоритет между нативным атрибутом и атрибом с `v-bind` (начиная с v3.0) будет определяться порядком указания, применяться будет всегда последний указанный атрибут

```vue
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- результат -->
<div id="blue"></div>

<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- результат -->
<div id="red"></div>
```

### v-model

Используется для двухстороннего связывания между моделью и представлением, проще говоря, между данными элементов форм и свойствами объекта.  
Используется только с: `<input>` `<select>` `<textarea>` `компоненты`  
Имеет три модификатора:

-   `lazy` обновление данных произойдет после события `change` а не `input`
-   `number` приводит значения к числу
-   `trim` удаляет пробелы

Начиная с <Badge type="tip" text="v3.4" vertical="middle" /> рекомендуется использовать `defineModel()` который позволяет реализовать двухстороннее связывание между родительским и дочерним компонентами.

### v-for

Класcический цикл, итерирует по массивам или объектам.  

Требует указания уникального значения `key`, почему?  
По умолчанию vue взаимодействует с элементами массива по их индексу, и при удалении или добавлении элемента массива индексы сдвигаются что может приводить к ошибкам отображения.  
А так же при обновлении элемента массива, vue будет искать элемент не по индексу, а по уникальному id, что увеличивает производительность при работе с виртуальным-DOM деревом.  

::: info
Нельзя использовать вместе с `v-if`, так как `v-if` имеет больший приоритет 
:::

### v-on 

Позволяет прослушивать события, и выполнять код по их наступлению, имеет сокращение в виде - `@`  
Доступ к объекту события можно получить через `$event`  

А так же, директива поддерживает модификаторы: 
- `stop` - останавливает всплытие
- `prevent` - отменяет дефолтное поведение
- `self` - вызывает событие непосредственно на самом элементе
- `once` - событие сработает только 1 раз

И модификаторы системных клавиш `@keyup.ctrl="some"` и так далее  

### v-text
Обновляет текстовое содержимое DOM элемента, работает через свойство `.textContent` поэтому перезаписывает все содержимое элемента.  

### v-html
Добавляет html разметку через свойство `.innerHtml`, использовать не рекомендуется по соображениям безопасности  

### v-pre 
Пропускает компиляцию для элемента и всех его потомков. 

<template><div><h3 id="что-такое-реактивность" tabindex="-1"><a class="header-anchor" href="#что-такое-реактивность"><span>Что такое реактивность?</span></a></h3>
<p>Это парадигма программирования, которая реализует автоматическую синхронизацию между моделью (данными) и представлением (интерфейсом). При изменении данных - изменяется интерфейс.</p>
<h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span>ref()</span></a></h3>
<p>Оборачивает примитивный тип данных в прокси-объект, делая эти данные реактивными.<br>
Так как в нативном javascript нет возможности отслеживать изменение данных и их зависимостей, Vue использует прокси-обект который как раз позволяет отслеживать изменения данных и их зависимостей, тем самым реализуя реактивность.</p>
<h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive"><span>reactive()</span></a></h3>
<p>Реализует <code v-pre>глубокую реактивность</code>, оборачивает массивы, объекты любой вложенности, коллекции <code v-pre>Map</code>, <code v-pre>Set</code> в прокси-обект, делая значения, в не зависимости от глубины вложенности, реактивными.</p>
<h3 id="чем-отличаются-ref-от-reactie" tabindex="-1"><a class="header-anchor" href="#чем-отличаются-ref-от-reactie"><span>Чем отличаются ref от reactie?</span></a></h3>
<p>Основное отличие в том, что <code v-pre>reactive()</code> работает с глубоко вложенными объектами.</p>
<h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed"><span>computed()</span></a></h3>
<p>Возвращает вычисленное значение, на основе реактивных зависимостей.<br>
То есть, у нас есть реактивные данные, нам нужно что-то вычислить используя эти реактивные данные, для этого и используется <code v-pre>computed()</code>, главной особенностью которого является кеширование, которое позволяет возвращать значение из кеша, если реактивные зависимости не менялись.<br>
По умолчанию вычесленное значение является <code v-pre>readonly</code>, которое не рекомендуется менять.<br>
Но также, существует возможность менять реактивные зависимости используя метод <code v-pre>set()</code>, но данный подход не рекомендуется к использованию.</p>
<h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly"><span>readonly()</span></a></h3>
<p>Принимает данные и возвращает их <code v-pre>readonly</code> копию.</p>
<h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span>watch()</span></a></h3>
<p>Наблюдает за указаными реактивными зависимостями, запускает callback при их изменении.<br>
Конфигурируется при помощи объекта со свойствами</p>
<ul>
<li><code v-pre>immediate: true</code> вызывает callback при монтировании компонента</li>
<li><code v-pre>once: true</code> вызывает callback только один раз</li>
<li><code v-pre>flush: post</code> дожидается окончания рендеринга компонента и только тогда запускает callback</li>
<li><code v-pre>flush: sync</code> срабатывает сразу же не дожидаясь рендерига компонета, может вызвать проблемы</li>
</ul>
<h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect"><span>watchEffect()</span></a></h3>
<p>Так же как и <code v-pre>watch()</code> вызывает callback функцию в ответ на изменение зависимостей, только не требует явного указания зависимостей, все используемые внутри callback функции зависимости автоматически становятся отслеживаемыми.<br>
Срабатывает сразу, по аналоги с <code v-pre>watch({immediate: true})</code></p>
<p>Сокращения:<br>
<code v-pre>watchEffect()</code> с параметром <code v-pre>flush: 'post'</code> - <code v-pre>watchPostEffect()</code><br>
<code v-pre>watchEffect()</code> с параметром <code v-pre>flush: 'sync'</code> - <code v-pre>watchSyncEffect()</code></p>
<p>Версия <Badge type="tip" text="v3.5+" vertical="middle" /> поддреживает методы для управления наблюдателем:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> stop<span class="token punctuation">,</span> pause<span class="token punctuation">,</span> resume <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="чем-отличаются-watch-и-watcheffect" tabindex="-1"><a class="header-anchor" href="#чем-отличаются-watch-и-watcheffect"><span>Чем отличаются watch и watchEffect?</span></a></h3>
<p><code v-pre>watch()</code> - требует указания отслеживаемых зависимостей, срабатывает только при изменении зависимостей.<br>
<code v-pre>watchEffect()</code> - не требует указания отслеживаемых зависимостей, срабатывает при монтировании компонента.</p>
<h3 id="onwatchercleanup-3-5" tabindex="-1"><a class="header-anchor" href="#onwatchercleanup-3-5"><span>onWatcherCleanup 3.5+</span></a></h3>
<p>Регистрирует функцию очистки, которая будет выполняться, когда текущий наблюдатель собирается повторно запуститься или при размонтировании компонента.</p>
<p>Так же для очистки можно использовать <code v-pre>onCleanup()</code></p>
<h3 id="isref" tabindex="-1"><a class="header-anchor" href="#isref"><span>isRef()</span></a></h3>
<p>Проверяет на рекактивность.<br>
Возвращает <code v-pre>true</code> если переданный аргемент является реактивным.</p>
<h3 id="unref" tabindex="-1"><a class="header-anchor" href="#unref"><span>unref()</span></a></h3>
<p>Принимает рективные и литеральные значения, всегда возвращает литерал.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> reactiveValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> regularValue <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">unref</span><span class="token punctuation">(</span>reactiveValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span></span>
<span class="line"><span class="token function">unref</span><span class="token punctuation">(</span>regularValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toref-3-3" tabindex="-1"><a class="header-anchor" href="#toref-3-3"><span>toRef() 3.3+</span></a></h3>
<p>Создает двустронее связывание с конкретным свойством объекта.<br>
Проще говоря, извлекает свойство объекта в переменную, делая их синхронными, то есть при изменении свойства объекта значение переменной поменяется и наоборот.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    bar<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">fooRef<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span></span>
<span class="line"></span>
<span class="line">state<span class="token punctuation">.</span>foo<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tovalue-3-3" tabindex="-1"><a class="header-anchor" href="#tovalue-3-3"><span>toValue() 3.3+</span></a></h3>
<p>Так же как и <code v-pre>unref()</code> возвращает литеральное значение, разница в том, что <code v-pre>unref()</code> работает только с реактивными данными, а в <code v-pre>toValue()</code> можно передавать любые методы возвращающие значения.</p>
<h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs"><span>toRefs()</span></a></h3>
<p>Преобразует всю свойства объекта в отдельные <code v-pre>ref</code> ссылки.<br>
Удобно при деструктуризации.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span></span>
<span class="line">    age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isproxy" tabindex="-1"><a class="header-anchor" href="#isproxy"><span>isProxy()</span></a></h3>
<p>Проверяет является ли объект прокси.<br>
Возвращает <code v-pre>true</code> если объек создан через <code v-pre>reactive()</code> или <code v-pre>readonly()</code></p>
<h3 id="isreactive" tabindex="-1"><a class="header-anchor" href="#isreactive"><span>isReactive()</span></a></h3>
<p>Вернет <code v-pre>true</code> если объект создан через <code v-pre>reactive()</code></p>
<h3 id="isreadonly" tabindex="-1"><a class="header-anchor" href="#isreadonly"><span>isReadonly()</span></a></h3>
<p>Вернет <code v-pre>true</code> если объект создан через <code v-pre>readonly()</code></p>
</div></template>



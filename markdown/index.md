##  Make it simple
<!-- .slide:data-background="images/frontpage.png" data-background-size="100%" -->

### Sensibilisation UX pour les développeurs
<!-- .element: style="color: pink;" -->

16/06/2016 - Houbeb Ben Othmene & Céline Ung


---
## Qui sommes nous?
![Prez](images/celine&houb_1.jpg)




<div class="imageRight">
<img src="images/celine_1.jpg" width="350" />
</div>

<div class="left">
<blockquote class="fragment fixed" data-fragment-index="1"  data-transition="slide">
	<div class="highlight">Mes passions:</div>
	<div>Lire, Voyager, Shopping</div>
</blockquote>

<br/>

<blockquote class="fragment fixed" data-fragment-index="2"  data-transition="slide">
	<div class="highlight">Mes applications préférées:</div>
	<div>ShowroomPrivée</div>
	<div>Youtube</div>
	<div>La Fourchette</div>
</blockquote>

<br/>

<blockquote class="fragment fixed" data-fragment-index="3"  data-transition="slide">
	<div class="highlight">Ce que je n'aime pas:</div>
	<div>Le désordre</div>
</blockquote>
</div>





<div class="imageLeft">
<img src="images/houbeb_1.jpg" width="350" />
</div>

<div class="right">
<blockquote class="fragment fixed" data-fragment-index="1"  data-transition="slide">
	<div class="highlight">Mes passions:</div>
	<div>Vélo, Yoga, Photographie</div>
</blockquote>

<br/>

<blockquote class="fragment fixed" data-fragment-index="2"  data-transition="slide">
	<div class="highlight">Mes applications préférées:</div>
	<div>Instagram, pogdesign, Spotify</div>
</blockquote>

<br/>

<blockquote class="fragment fixed" data-fragment-index="3"  data-transition="slide">
	<div class="highlight">Ce que je n'aime pas:</div>
	<div>Râler, l'indécision Et le site de Jenkins</div>
</blockquote>
</div>




## On <span class="highlight">&#10084;</span> UX &#128522;
![Prez](images/celine&houb_2.jpg)


---
## On parle de quoi?
![Prez](images/prez.png)



![Prez](images/seriously.jpeg)
<!-- .element: style="background-color: white;" -->



## On parle de quoi?

<blockquote class="fragment plan" data-fragment-index="0"  data-transition="slide">
	<div class="textRight"><i class="fa fa-book" aria-hidden="true"></i>Qu'est-ce que l'UX?</div>
</blockquote>

<blockquote class="fragment" data-fragment-index="1"  data-transition="slide">
	<div class="textRight"><i class="fa fa-eye" aria-hidden="true"></i>Comment qualifier une bonne UX?</div>
</blockquote>

<blockquote class="fragment" data-fragment-index="2"  data-transition="slide">
	<div class="textRight"><i class="fa fa-users" aria-hidden="true"></i>Truth about users</div>
</blockquote>

<blockquote class="fragment" data-fragment-index="3"  data-transition="slide">
	<div class="textRight"><i class="fa fa-desktop" aria-hidden="true"></i>Workshop</div>
</blockquote>

---
## Qu'est-ce que l'UX?
![good question](images/good_question.gif)

Notes:
   on ne parle pas de:
       - process
       - méthodologies
       - outils



### Definitions

> <div class="fragment" data-fragment-index="1"><p class="quote">“ UX design is the art and science of generating 
	<span class="highlight"> positive emotions </span>
	among people who interact with products or services.”</p>
<p class="quote-author">Tomer Sharon, UX Researcher chez Google</p></div>

<br/>

> <div class="fragment" data-fragment-index="2"><p class="quote">“ UX design is about delighting users by
	<span class="highlight"> anticipating their needs </span>
	and giving them something they 
	<span class="highlight"> didn’t think </span>
	to ask for. ” </p>
<p class="quote-author">Reed Jones, UX Researcher chez StubHub</p></div>

Notes:
1ère définition: insister sur la création d'émotions positives
	Un utilisateur malheureux quittera le site, ne reviendra pas. Il existe pleins d'autres sites similaires sur internet
	Il ne conseillera pas l'application
	Pas d'argent
2e définition: 
	Un utilisateur heureux du service apporté, reviendra
	Donner des exemples d'anticipation qui plairont aux utilisateurs: contact du service client, 
		ajout de telle ou telle fonctionalité, etc.
		ex: Amazon et l'enregistrement de la carte de crédit



##  Comprendre l'UX
![Comprendre l'UX par l'exemple](images/uxui.png)

Notes:
	La route construite = design de produit
	La route improvisée = design UX
	L’usage du produit par l’utilisateur produit une expérience. C’est l’expérience utilisateur.



## Rentabilité
![Rentabilité de l'UX, OUI!](images/rentabilite.png)



## Rentabilité

> <div class="quote">« La fonction la plus populaire est le <span class="highlight">bouton de recherche</span>, 
parce que personne n’arrive à naviguer [...] la seconde fonction la plus 
populaire est le <span class="highlight">bouton d’aide</span>, parce que la fonction de recherche 
n’est pas opérationnelle »</div>

> IBM Internet Operations Manager, 1998
<!-- .element: class="quote-author" -->

Notes:
	Bien beau de plaire aux users mais quelle rentabilité?
	IBM décide de revoir le design en se basant sur des principes simples: 
		homogénéité de l'interface + accès rapides aux pages souvent utilisés
	Site au lancement de la nouvelle appli: 
		traffic +120%
		vente +400%
	Un bon manager UX a pour objectif l'atteinte des objectifs business de l'entreprise par le biais d'une expérience utilisateur bien calibrée. Fournir une bonne UX est un peu comme un moyen marketing.



## Et sans UX? <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
![Site sans UX](images/oldintranet.png)
Notes:
	site 100% orienté métier
	ne tient pas compte des utilisateurs


---
## Comment qualifier une bonne UX?
![checklist](images/checklist.png)
Notes:
	Quand on évalue continuellement notre livrable/ notre produit, il est essentiel d'être à l'écoute des utilisateurs
	face à leur intéraction avec le produit. Voici une petite checklist d'une bonne UX



### Comme dans le code ...

    public Map<String, List<Article>> groupByAuthor(){
        Map<String, List<Article>> result = new HashMap<>();
    
        for (Article article : articles) {
            if (result.containsKey(article.getAuthor()) {
                result.get(article.getAuthor()).add(article);
              } else {
                ArrayList<Article> articles = new ArrayList<>();
                articles.add(article);
                result.put(article.getAuthor(), articles);
            }
         }

        return result;
    }
    
    public Map<String, List<Article>> groupByAuthor(){

        return articles.stream()
        .collect(Collectors.groupingBy(Article:getAuthor));
     }
<!-- .element: class="code" data-fragment-index="1"  data-transition="slide"-->



### 1- Simple and natural dialogue
![Simple and natural dialogue](images/dialog1.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1"  data-transition="slide"-->

> <div class="bad fragment" data-fragment-index="2"> Bad </div>

Notes:
	Un contenu avec un bon wording c'est aussi le bon terme, la bonne typographie, le bon emplacement le bon ajustement
	Il y a plein d'exemple qui illustrent ça



### 1- Simple and natural dialogue
![Simple and natural dialogue](images/dialog2.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1"  data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good  </div>




### 1- Simple and natural dialogue
![Simple and natural dialogue](images/dialog3.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1"  data-transition="slide"-->

> <div class="bad fragment" data-fragment-index="2"> Bad </div>




### 1- Simple and natural dialogue
![Simple and natural dialogue](images/dialog4.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="bad fragment" data-fragment-index="2"> Bad </div>




### 2- Minimize loading
![Minimize Memory load](images/load1.gif)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="bad fragment" data-fragment-index="2"> Bad </div>



### 2- Minimize loading
![Minimize Memory load](images/load2.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>




### 3- Prevent errors
![Prevent errors](images/error1.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="bad fragment" data-fragment-index="2"> Bad </div>



### 4- Use constructive error messages

> <div class="quote">« Help users recognize, diagnose,
</br>
 and <span class="highlight">recover </span> from errors.
</br>
 <span class="highlight">Error</span> messages should be expressed in plain language (no codes),
</br>
 precisely indicate <span class="highlight">the problem</span>,
</br>
 and constructively suggest <span class="highlight">a solution</span>. »
 </div>

Notes: 
	Deux éléments qu'on cherche quand on a un message d'erreur: Pourquoi l'erreur s'est produite
	Et qu'est ce je dois faire pour y rémédier



### 4- Use constructive error messages
![Use constructive error messages](images/constructive.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>



### 5- Make clear Exits
![Make clear Exits](images/exit1.jpg)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>

Notes: 
	On parle d'un terme assez rigolo: la trouvabilité, la facilité à naviguer d’un contenu à un autre 
	pour l’utilisateur et à trouver ce qu’il cherche.



### 5- Make clear Exits
![Make clear Exits](images/exit2.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>



### 6- Make shortcuts
![Make shortcuts](images/shortcut.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>

Notes:
	On fait référence aux chemins les plus pratiques pour les utilisateurs 
	afin d'accéder à une fonctionnalité Cela peut être plus convenable pour un utilisateur expert
	Un très bon exemple que je connais c'est celui de github



### 6- Make shortcuts
![Make shortcuts](images/shortcut2.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>

Notes:
	Les raccourcis ne sont pas forcément des raccourcis clavier mais plutôt



### 7- Feedbacks <i class="fa fa-exchange" aria-hidden="true"></i>
![Give feedbacks](images/feedback1.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>

Notes:
	Il est important de récolter les feedbacks des utilisateurs grâce à un formulaire contextuel
	et personnalisable sans établir une démarche couteuse ou lourde



### 7- Feedbacks <i class="fa fa-exchange" aria-hidden="true"></i>
![Give feedbacks](images/feedback2.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>




### 7- Feedbacks <i class="fa fa-exchange" aria-hidden="true"></i>
![Give feedbacks](images/feedback3.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="1" data-transition="slide"-->

> <div class="good fragment" data-fragment-index="2"> Good </div>



### 8- Consistency

> <div class="quote">« Users should not have to wonder whether different <span class="highlight">words</span>,
 <span class="highlight">situations</span>, or <span class="highlight">actions</span> mean the same thing. Follow platform conventions. »
</div>

- Element positionning
- Labels
- Gaphic design
- Menus
- Navigation
- Interactions

---
## Truth about users

![User don’t care about learning your system](images/idontcare.gif)
Notes:
	les points précédents permettent de guider l'utilisateur, de le rassurer pour qu'il ne se sente pas perdu
	l'utilisateur n'est pas idiot, They just don’t care about learning your system. It doesn’t matter to them.
	au pire, il va voir ailleurs.



### Le saviez-vous?

<div class="bad-data">79%</div>

> chercheront un autre site internet pour répondre à leurs besoins
<!-- .element: class="fragment" data-fragment-index="1" data-transition="slide"-->

Notes:
    Les utilisateurs mobiles sont 5 fois plus exigeants



### Le saviez-vous?

<div class="bad-data">48%</div>

> des utilisateurs pensent qu'un site qui ne marche pas bien sur mobile est dû au
> fait que le métier ne s'en soucie pas
<!-- .element: class="fragment" data-fragment-index="1" data-transition="slide"-->

Notes:
    Augmentation satisfaction client et fidélisation



### Le saviez-vous?

<div class="bad-data">40%</div>

> du temps de développement est utilisé à développer et corriger des fonctionnalités inutiles aux utilisateurs

Notes:
    Moins de perte de temps, gain de productivité, baisse des coûts



### Le saviez-vous?

<i class="fa fa-frown-o" style="font-size:5em;" aria-hidden="true"></i>

> <div>Une mauvaise expérience de service est relayée <span class="highlight">17 fois</span>, tandis qu'une bonne ne l'est que 
<span class="highlight">3 fois</span></div>
<!-- .element: class="fragment" data-fragment-index="1" data-transition="slide"-->

Notes:
    Permet:
    	 - Augmentation des ventes
    	 - Besoin de moins de formations et de support



### Comportements utilisateur

<blockquote class="fragment plan" data-fragment-index="0"  data-transition="slide">
	<div class="textRight"><i class="fa fa-hourglass-end" aria-hidden="true"></i>Don't make me think!</div>
</blockquote>

<blockquote class="fragment" data-fragment-index="1"  data-transition="slide">
	<div><i class="fa fa-child" aria-hidden="true"></i>They Don’t Use Your Software The Way You Intended</div>
</blockquote>

<blockquote class="fragment" data-fragment-index="2"  data-transition="slide">
	<div class="textRight"><i class="fa fa-bomb" aria-hidden="true"></i>They satisfice (satisfy + sacrifice)</div>
</blockquote>


Notes:
	La plupart du temps, ils font plusieurs choses en même temps (ex: manger, télé, etc.)
	- Première règle: don't make me think = un boutton doit ressembler à un boutton. 
	- Deuxième règle: They Don’t Use Your Software The Way You Intended = pas de temps -> ils scannent la page, utilise des "@" pour s'adresser à qqn, There’s a big difference between what you think you’ve put onto a screen and what the user thinks you’ve put onto a screen.
	- Troisième règle: They satisfice = Most things, we just need to learn enough to get by.
	Pour résumer, ils viennent sur le site pour chercher une réponse à qqch, s'il ne trouve pas de réponse, ils s'en vont. Il faut trouver les réponses qu'ils pourraient chercher pour qu'ils restent sur le site.


---

## Workshop
![Workshop](images/workshop.gif)



### We did it before <i class="fa fa-rss" aria-hidden="true"></i>
![previous-workshop](images/workshop1.png)
 
Notes:
 	- plusieurs onglets ouverts: "qu'est-ce que l'onglet Accueil?"
 	- pas d'indication que l'on est sur la page Accueil
 	- trop d'infos sur les pages
 	- lorsque l'on clique sur "Java" de l'onglet "Expertise", on tombe sur une phrase bateau, sans détail, de ce qu'est l'expertise Zenika (frameworks, technos)
 	- la page de recrutement contient trop d'infos, alors que ce qui importe c'est voir les offers. Les offres prennent trop de place sur la page. et on ne peut en afficher que 3 max. La page met du temps à s'afficher.
 	- sur la page "évènement", trop de chose, rien n'est mis en avant
 	- trop de choix sur l'onglet formations: on est obligé d'utiliser la fonction de recherche. Il faudrait mieux organiser la page, et peut-être ajouter des retours stagiaires.

---

### Keep in mind
>  <div class="fragment" data-fragment-index="1"><p class="quote">If <span class="highlight"> clients (or someone else) </span> don't get it, there is generally something to be improved .</div>
 
![Thanks](images/thanks.png)
<!-- .element: class="fragment navigate-next" data-fragment-index="2" data-transition="slide"-->

Notes: 

  
  


var isiPad = navigator.userAgent.match(/iPad/i) !== null;
if(isiPad){$("section.success").css("background-attachment","scroll");}
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'frederickrosales';
var docElem = window.document.documentElement,
        //nav buttons
        nav = Array.prototype.slice.call(document.querySelectorAll('nav >ul>li> a') ),
        // support transitions
        support = Modernizr.csstransitions,
        // transition end event name
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        docscroll = 0,
        // click event (if mobile use touchstart)
        clickevent = mobilecheck() ? 'touchstart' : 'click';


         var triggerBttn = document.getElementById( 'trigger-overlay' ),
         container,perspective,
         overlay = document.querySelector( 'div.overlay1' ),
         headerContainer,header,
             
        closeBttn = overlay.querySelector( 'button.overlay-close' );
        support = { transitions : Modernizr.csstransitions };
        
//http://www.behance.net/v2/users/rikirosales?callback=?&api_key=NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1
//http://www.behance.net/v2/projects/475570?callback=?&api_key=NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1
//http://www.behance.net/v2/users/rikirosales/projects?callback=?&api_key=NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1
     window.scrollTo(0, 0);
        
     init();
     loadMoreProject();
     startNAv();

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    // from http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){
            if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    

    function startNAv() {

        nav.forEach(function(el,i){
            
            el.addEventListener(clickevent,function(ev){
                window.scrollTo(0,$(ev.target.getAttribute('href')).offset().top);
                 toggleOverlay()
            });
        });
    }
    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
           
            setTimeout(function(){
                classie.remove(perspective,"hideMe");
            },500)
             classie.remove( overlay, 'open' );
                classie.add( overlay, 'close' );
                classie.remove(triggerBttn,"active");
                var onEndTransitionFn = function( ev ) {
                    if( support.transitions ) {
                        if( ev.propertyName !== 'visibility' ) return;
                        this.removeEventListener( transEndEventName, onEndTransitionFn );
                    }
                    classie.remove( overlay, 'close' );
                };
                if( support.transitions ) {
                    overlay.addEventListener( transEndEventName, onEndTransitionFn );
                }
                else {
                    onEndTransitionFn();
                }    
            
        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add(perspective,"hideMe");
            setTimeout(function(){
                classie.add( overlay, 'open' );
                classie.add(triggerBttn,"active");
            },500)    
            
        }
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
    //closeBttn.addEventListener( 'click', toggleOverlay );



function toolsClick(e){
    TweenMax.to('h3.aboutAnimate', .8, {opacity:1,marginTop: 118});
    TweenMax.to('ul.logo-icons.about li', .8, {opacity:1,delay:.6});
    e.preventDefault();
}
function init() {
    //if( document.querySelector('#username').value){
    //    userID = document.querySelector('#username').value
    //}
    //submitBtn.addEventListener("click",submitBtnClick);
    var behanceUserAPI = 'http://www.behance.net/v2/users/'+ userID +'?callback=?&api_key='+ apiKey;
    container= document.querySelector('.container')
    projectIDInit(1);
          $.getJSON("json/profile.json", function(user) {
        //$.getJSON(behanceUserAPI, function(user) {
            var data = JSON.stringify(user);

            sessionStorage.setItem('behanceUser', data);
            setUserTemplate();
            setAboutTemplate();
            setLinkedinTemplate();

        }).error(function(jqXhr, textStatus, error) {
                alert("ERROR on profile:  " + textStatus + ", " + error);
        });

        function setUserTemplate() {
            Handlebars.registerHelper('noop', function() {
            return "rikis";
            });        

	        var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
	        getTemplate = $('#profile-template').html(),
	        template    = Handlebars.compile(getTemplate),
	        result      = template(userData);

	        $('div.header').html(result);
            $("#copyright").html(userData.user.display_name);

        }
        function setAboutTemplate() {
            var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
            getTemplate = $('#about-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(userData);
            $('div#aboutContent').html(result);
        }
        function setLinkedinTemplate() {
            var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
            getTemplate = $('#linkedin-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(userData);
            
            $('div.linkedin').html(result);
            $(".linkedin").owlCarousel({
               singleItem:true,
               items:3,
               responsive:true,
               lazyLoad:true,
               navigation : true
            });
        }
    }
function projectIDInit(projectID){
    //var behanceProjectIDAPI = 'http://www.behance.net/v2/projects/'+ projectID +'?callback=?&api_key='+ apiKey;   
   
    $.getJSON("json/projectItem"+projectID+".json", function(user) {
   // $.getJSON(behanceProjectIDAPI, function(user) {
            
            var data = JSON.stringify(user);
           sessionStorage.setItem('behanceProjectID', data);
            setProjectIDTemplate();
        }).error(function(jqXhr, textStatus, error) {
                alert("ERROR in projectItem: " + textStatus + ", " + error);
        });
        function setProjectIDTemplate() {
            var userData    = JSON.parse(sessionStorage.getItem('behanceProjectID')),
            getTemplate = $('#projectID-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(userData);
            $('div.modal-content').eq(0).html(result);
            //alert(userData)
        }
}
function loadMoreProject(event){
    var behanceProjectsAPI = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key='+ apiKey;
    //$("#loadMore img").show();
   // $(".overlay").show();
    $.getJSON("json/projects.json", function(user) {
    //$.getJSON(behanceProjectsAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceProjects', data);
            setProjectTemplate();
            $("#loadMore img").hide();
            //console.log(result)
        })
     .done(function() {
        setTimeout( function(){

            headerContainer = document.getElementById('headerContainer');
            header = document.getElementById('page-header');
            classie.add(headerContainer,"open");
            classie.add(header,"open")

            
            $("body").removeClass("pageLoading");
            $(".overlay").addClass("close")
             setTimeout( function(){
                $(".overlay").remove();},4000);
               headerContainer = document.getElementById('headerContainer');
               header = document.getElementById('page-header');
               classie.add(headerContainer,"open");
               classie.add(header,"open") ;
               perspective = document.querySelector('.perspective-container') 
               container = document.getElementById('prism-effect');
               output = document.getElementById('output');
               initialise(); 

        }, 2000 );
       

     }).error(function(jqXhr, textStatus, error) {
                alert("ERROR in load more: " + textStatus + ", " + error);
     });
    function setProjectTemplate() {
        var userData    = JSON.parse(sessionStorage.getItem('behanceProjects')),
        getTemplate = $('#project-template').html(),
        template    = Handlebars.compile(getTemplate),
        result      = template(userData);
        $('#projects').html(result);
         $("#projects").owlCarousel({
           //singleItem:true,
           items:3,
           responsive:true,
           lazyLoad:true,
           navigation : true
         });
    }

}    



       
           var MESH = {
             width: 3,
             height: 3,
             depth: 36,
             segments: 20,
             slices: 10,
             xRange: 0.7,
             yRange: 0.65,
             zRange: 1.0,
             ambient: '#590000',
             diffuse: '#FF5A6E',
             speed: 0.0003
           };
           var LIGHT = {
             count: 0.1,
             xyScalar: 1,
             zOffset: 149,
             ambient: '#FFFFFF',
             diffuse: '#FFFFFF',
             speed: 0.001,
             gravity: 1200,
             dampening: 0.05,
             minLimit: 10,
             maxLimit: null,
             minDistance: 20,
             maxDistance: 400,
             autopilot: false,
             draw: false,
             bounds: FSS.Vector3.create(),
             step: FSS.Vector3.create(
               Math.randomInRange(0.2, 1.0),
               Math.randomInRange(0.2, 1.0),
               Math.randomInRange(0.2, 1.0)
             )
           };
            var WEBGL = 'webgl';
            var CANVAS = 'canvas';
            var SVG = 'svg';
            var RENDER = {
              renderer: CANVAS
            };

        //------------------------------
        // Export Properties
        //------------------------------
        var EXPORT = {
          width: 2000,
          height: 1000,
          drawLights: false,
          minLightX: 0.4,
          maxLightX: 0.6,
          minLightY: 0.2,
          maxLightY: 0.4,
          export: function() {
            var l, x, y, light,
                depth = MESH.depth,
                zOffset = LIGHT.zOffset,
                autopilot = LIGHT.autopilot,
                scalar = this.width / renderer.width;

            LIGHT.autopilot = true;
            LIGHT.draw = this.drawLights;
            LIGHT.zOffset *= scalar;
            MESH.depth *= scalar;

            resize(this.width, this.height);

            for (l = scene.lights.length - 1; l >= 0; l--) {
              light = scene.lights[l];
              x = Math.randomInRange(this.width*this.minLightX, this.width*this.maxLightX);
              y = Math.randomInRange(this.height*this.minLightY, this.height*this.maxLightY);
              FSS.Vector3.set(light.position, x, this.height-y, this.lightZ);
              FSS.Vector3.subtract(light.position, center);
            }

            update();
            render();

            switch(RENDER.renderer) {
              case WEBGL:
                window.open(webglRenderer.element.toDataURL(), '_blank');
                break;
              case CANVAS:
                window.open(canvasRenderer.element.toDataURL(), '_blank');
                break;
              case SVG:
                var data = encodeURIComponent(output.innerHTML);
                var url = "data:image/svg+xml," + data;
                window.open(url, '_blank');
                break;
            }

            LIGHT.draw = true;
            LIGHT.autopilot = autopilot;
            LIGHT.zOffset = zOffset;
            MESH.depth = depth;

            resize(container.offsetWidth, container.offsetHeight);
          }
        };


        //------------------------------
        // Global Properties
        //------------------------------
        var now, start = Date.now();
        var center = FSS.Vector3.create();
        var attractor = FSS.Vector3.create();
        
        var renderer, scene, mesh, geometry, material;
        var webglRenderer, canvasRenderer, svgRenderer;
        var gui, autopilotController;
        var container;
        var output; 
        //------------------------------
        // Methods
        //------------------------------
        function initialise() {
          createRenderer();
          createScene();
          createMesh();
          createLights();
          addEventListeners();
          resize(container.offsetWidth, container.offsetHeight);
          animate();
        }

        function createRenderer() {
          webglRenderer = new FSS.WebGLRenderer();
          canvasRenderer = new FSS.CanvasRenderer();
          svgRenderer = new FSS.SVGRenderer();
          setRenderer(RENDER.renderer);
        }

        function setRenderer(index) {
          if (renderer) {
            output.removeChild(renderer.element);
          }
          switch(index) {
            case WEBGL:
              renderer = webglRenderer;
              break;
            case CANVAS:
              renderer = canvasRenderer;
              break;
            case SVG:
              renderer = svgRenderer;
              break;
          }
          renderer.setSize(container.offsetWidth, container.offsetHeight);
          output.appendChild(renderer.element);
        }

        function createScene() {
          scene = new FSS.Scene();
        }

        function createMesh() {
          scene.remove(mesh);
          renderer.clear();
          geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
          material = new FSS.Material(MESH.ambient, MESH.diffuse);
          mesh = new FSS.Mesh(geometry, material);
          scene.add(mesh);

          // Augment vertices for animation
          var v, vertex;
          for (v = geometry.vertices.length - 1; v >= 0; v--) {
            vertex = geometry.vertices[v];
            vertex.anchor = FSS.Vector3.clone(vertex.position);
            vertex.step = FSS.Vector3.create(
              Math.randomInRange(0.2, 1.0),
              Math.randomInRange(0.2, 1.0),
              Math.randomInRange(0.2, 1.0)
            );
            vertex.time = Math.randomInRange(0, Math.PIM2);
          }
        }

        function createLights() {
          var l, light;
          for (l = scene.lights.length - 1; l >= 0; l--) {
            light = scene.lights[l];
            scene.remove(light);
          }
          renderer.clear();
          for (l = 0; l < LIGHT.count; l++) {
            light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
            light.ambientHex = light.ambient.format();
            light.diffuseHex = light.diffuse.format();
            scene.add(light);

            // Augment light for animation
            light.mass = Math.randomInRange(0.5, 1);
            light.velocity = FSS.Vector3.create();
            light.acceleration = FSS.Vector3.create();
            light.force = FSS.Vector3.create();

            // Ring SVG Circle
            light.ring = document.createElementNS(FSS.SVGNS, 'circle');
            light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
            light.ring.setAttributeNS(null, 'stroke-width', '0.5');
            light.ring.setAttributeNS(null, 'fill', 'none');
            light.ring.setAttributeNS(null, 'r', '10');

            // Core SVG Circle
            light.core = document.createElementNS(FSS.SVGNS, 'circle');
            light.core.setAttributeNS(null, 'fill', light.diffuseHex);
            light.core.setAttributeNS(null, 'r', '4');
          }
        }

        function resize(width, height) {
          renderer.setSize(width, height);
          FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
          createMesh();
        }

        function animate() {
          now = Date.now() - start;
          update();
          render();
          requestAnimationFrame(animate);
        }

        function update() {
          var ox, oy, oz, l, light, v, vertex, offset = MESH.depth/2;

          // Update Bounds
          FSS.Vector3.copy(LIGHT.bounds, center);
          FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

          // Update Attractor
          FSS.Vector3.setZ(attractor, LIGHT.zOffset);

          // Overwrite the Attractor position
          if (LIGHT.autopilot) {
            ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
            oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
            FSS.Vector3.set(attractor,
              LIGHT.bounds[0]*ox,
              LIGHT.bounds[1]*oy,
              LIGHT.zOffset);
          }

          // Animate Lights
          for (l = scene.lights.length - 1; l >= 0; l--) {
            light = scene.lights[l];

            // Reset the z position of the light
            FSS.Vector3.setZ(light.position, LIGHT.zOffset);

            // Calculate the force Luke!
            var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
            var F = LIGHT.gravity * light.mass / D;
            FSS.Vector3.subtractVectors(light.force, attractor, light.position);
            FSS.Vector3.normalise(light.force);
            FSS.Vector3.multiplyScalar(light.force, F);

            // Update the light position
            FSS.Vector3.set(light.acceleration);
            FSS.Vector3.add(light.acceleration, light.force);
            FSS.Vector3.add(light.velocity, light.acceleration);
            FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
            FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
            FSS.Vector3.add(light.position, light.velocity);
          }

          // Animate Vertices
          for (v = geometry.vertices.length - 1; v >= 0; v--) {
            vertex = geometry.vertices[v];
            ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
            oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
            oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
            FSS.Vector3.set(vertex.position,
              MESH.xRange*geometry.segmentWidth*ox,
              MESH.yRange*geometry.sliceHeight*oy,
              MESH.zRange*offset*oz - offset);
            FSS.Vector3.add(vertex.position, vertex.anchor);
          }

          // Set the Geometry to dirty
          geometry.dirty = true;
        }

        function render() {
          renderer.render(scene);

          // Draw Lights
          if (LIGHT.draw) {
            var l, lx, ly, light;
            for (l = scene.lights.length - 1; l >= 0; l--) {
              light = scene.lights[l];
              lx = light.position[0];
              ly = light.position[1];
              switch(RENDER.renderer) {
                case CANVAS:
                  renderer.context.lineWidth = 0.5;
                  renderer.context.beginPath();
                  renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
                  renderer.context.strokeStyle = light.ambientHex;
                  renderer.context.stroke();
                  renderer.context.beginPath();
                  renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
                  renderer.context.fillStyle = light.diffuseHex;
                  renderer.context.fill();
                  break;
                case SVG:
                  lx += renderer.halfWidth;
                  ly = renderer.halfHeight - ly;
                  light.core.setAttributeNS(null, 'fill', light.diffuseHex);
                  light.core.setAttributeNS(null, 'cx', lx);
                  light.core.setAttributeNS(null, 'cy', ly);
                  renderer.element.appendChild(light.core);
                  light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
                  light.ring.setAttributeNS(null, 'cx', lx);
                  light.ring.setAttributeNS(null, 'cy', ly);
                  renderer.element.appendChild(light.ring);
                  break;
              }
            }
          }
        }

        function addEventListeners() {
          window.addEventListener('resize', onWindowResize);
          container.addEventListener('click', onMouseClick);
          container.addEventListener('mousemove', onMouseMove);
        }

        //------------------------------
        // Callbacks
        //------------------------------
        function onMouseClick(event) {
          FSS.Vector3.set(attractor, event.x, renderer.height - event.y);
          FSS.Vector3.subtract(attractor, center);
          LIGHT.autopilot = !LIGHT.autopilot;
          //autopilotController.updateDisplay();
        }

        function onMouseMove(event) {
          FSS.Vector3.set(attractor, event.x, renderer.height - event.y);
          FSS.Vector3.subtract(attractor, center);
        }

        function onWindowResize(event) {
          resize(container.offsetWidth, container.offsetHeight);
          render();
        }

        // Let there be light!
      



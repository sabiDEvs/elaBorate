import pic1 from '../../RESOURCES/images/combus.jpeg';
import pic2 from '../../RESOURCES/images/engine.jpeg';
import pic3 from '../../RESOURCES/images/main engine block.jpeg';
import pic4 from '../../RESOURCES/images/cylinders.jpeg';
import pic5 from '../../RESOURCES/images/piston.jpeg';
import pic6 from '../../RESOURCES/images/connecting rods.jpeg';
import pic7 from '../../RESOURCES/images/camshaft.jpeg';
import pic8 from '../../RESOURCES/images/crankshaft.jpeg';
import pic9 from '../../RESOURCES/images/spark plug.jpeg';
import pic10 from '../../RESOURCES/images/valves.jpeg';
import pic11 from '../../RESOURCES/images/screw drivers.png';
import pic12 from '../../RESOURCES/images/mallet hammer.jpeg';
import pic13 from '../../RESOURCES/images/torque wrench.jpeg';
import pic14 from '../../RESOURCES/images/pliers.jpeg';
import pic15 from '../../RESOURCES/images/funnel.jpeg';
import pic16 from '../../RESOURCES/images/spannerr.jpeg';
import pic17 from '../../RESOURCES/images/car jack.jpeg';
import pic18 from '../../RESOURCES/images/timbs.jpg';
import pic19 from '../../RESOURCES/images/metre rule.jpeg';
import pic20 from '../../RESOURCES/images/measuring steel tapes.jpg';
import pic21 from '../../RESOURCES/images/guage.jpg';
import pic22 from '../../RESOURCES/images/marking knife scriber.jpg';
import pic23 from '../../RESOURCES/images/bevel square.jpg';
import pic24 from '../../RESOURCES/images/c clamp.jpg';
import pic25 from '../../RESOURCES/images/t clamp.jpg';
import pic26 from '../../RESOURCES/images/saw.jpg';
import pic27 from '../../RESOURCES/images/chisel.jpg';
import pic28 from '../../RESOURCES/images/wooden jack plane.jpg';
import pic29 from '../../RESOURCES/images/bradawl.jpg';
import pic30 from '../../RESOURCES/images/brace.jpg';
import pic31 from '../../RESOURCES/images/auger bitt.png';
import pic32 from '../../RESOURCES/images/hand drill.jpg';
import pic33 from '../../RESOURCES/images/mallet.jpg';
import pic34 from '../../RESOURCES/images/claw hammer.jpg';
import pic35 from '../../RESOURCES/images/pincers.jpg';
import pic36 from '../../RESOURCES/images/screw driver.jpg';
import pic37 from '../../RESOURCES/images/wood rasp files.jpg';
import pic38 from '../../RESOURCES/images/try square.png';
import pic39 from '../../RESOURCES/images/bench vice.jpg';
import pic40 from '../../RESOURCES/images/work bench.jpg';
import pic41 from '../../RESOURCES/images/paring chisel.jpg';
import pic42 from '../../RESOURCES/images/smooth plane.jpg';



const createDivs = (object) => {
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.innerHTML = `<span>• ${object.title}:</span>  ${object.text}`;
    div.appendChild(text);
    if(object.image !== ' '){
         const image = document.createElement('img');
          image.src = object.image;
          div.appendChild(image);
    }
    return div;
}



const createVids = (object) => {
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.innerHTML = `<span>• ${object.list}</span>`;
    div.appendChild(text);
    if(object.video !== ' '){
         const box = document.createElement('div');
         box.innerHTML = object.video;
         div.appendChild(box);
    }
    return div;
}


const displayStarted = () => {
    alert('Who dey breathe');
    const main = document.querySelector('main');
    main.innerHTML = '';
};


const displayWW201 = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
        const head = document.createElement('h1');
        head.textContent  = 'Introduction to Wood Work practice{WW201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['To know the materials used in woodwork shop','To familiarize with the tools used in woodwork shop','To know how to cut wood', 'To know how to plane wood'];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(objective);
        const appHead = document.createElement('h2');
        appHead.textContent = 'Apparatus';
        main.appendChild(appHead);
        const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Timber',
                image: pic18
            },
            {
                cap: 'Metre Rule',
                image: pic19
            },
            {
                cap: 'Measuring Steel Tape',
                image: pic20
            },
            {
                cap: 'Gauges',
                image: pic21
            },
            {
                cap: 'Marking Knife Scribers',
                image: pic22
            },
            {
                cap: 'Bevel Square',
                image: pic23
            },
            {
                cap: 'C-clamp',
                image: pic24
            },
            {
                cap: 'T-clamp',
                image: pic25
            },
            {
                cap: 'Saws',
                image: pic26
            },
            {
                cap: 'Chisel',
                image: pic27
            },
            {
                cap: 'Wooden Jack Plane',
                image: pic28
            },
            {
                cap: 'Bradawl',
                image: pic29
            },
            {
                cap: 'Brace',
                image: pic30
            },
            {
                cap: 'Auger bit',
                image: pic31
            },
            {
                cap: 'Hand drill',
                image: pic32
            },
            {
                cap: 'Mallet',
                image: pic33
            },
            {
                cap: 'Claw Hammer',
                image: pic34
            },
            {
                cap: 'Pincer',
                image: pic35
            },
            {
                cap: 'Screw driver',
                image: pic36
            },
            {
                cap: 'Wood rasp file',
                image: pic37
            },
            {
                cap: 'Try Square',
                image: pic38
            },
            {
                cap: 'Bench Vice',
                image: pic39
            },
            {
                cap: 'Work Bench',
                image: pic40
            },
            {
                cap: 'Paring Chisel',
                image: pic41
            },
            {
                cap: 'Smooth Plane',
                image: pic42
            },

        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'Woodworking practice is the art of creating functional or decorative objects from wood. Carpentry is a skilled trade that involves working with wood to create structures, furniture, and various wooden objects. Carpenters use a combination of hand tools and power tools to measure, cut, shape, join, and finish wood materials. Carpentry is a skilled trade within the broader field of woodworking that focuses specifically on constructing wooden structures and objects for various purposes. Carpentry is a skilled trade that involves the cutting, shaping, and installation of wood building materials. Hand saws, power saws (miter and circular saws), hammers, chisels, drills, levels, squares, and measuring tapes are examples of common carpentry tools.';
        theory.appendChild(explain);
        const explain1 = document.createElement('div');
        explain1.textContent = 'Utilizing specialist tools like joinery machines, routers, planers, and pneumatic nail guns may be necessary for advanced carpentry. Carpentry being a highly skilled job, carpentry demands accuracy, focus on detail, and a solid grasp of construction principles. As carpenters witness their creations come to life and make a positive impact on the built world, it provides opportunity for creativity, craftsmanship, and job satisfaction.';
        theory.appendChild(explain1);
        const description = document.createElement('p');
        description.textContent = 'Carpentry is used in different aspects and also applied in different fields which include:';
        theory.appendChild(description);
        const checkList = document.createElement('ul');
        const checks = ['Building frameworks', 'Flooring', 'Doors and windows', 'Roofing', 'Staircases', 'Furniture making etc.'];
        let array = [];
        for(let i = 0; i < checks.length; i++){
            array[i] = document.createElement('li');
            array[i].textContent = checks[i];
            checkList.appendChild(array[i]);
        }
        theory.appendChild(checkList);
        const text2 = document.createElement('p');
        text2.textContent = 'One of the materials used in wood work practice is wood. Wood is a natural material derived from the stems, branches, and roots of trees and there are different classes of wood, the main classes include:';
        theory.appendChild(text2);
        const categories = [
            {
            title: 'Soft wood',
            text: 'Softwood comes from coniferous trees(gymnosperms), also known as evergreens, which have needles or cones or scale-like leaves. These trees tend to grow faster than hardwoods and are generally less expensive. Softwoods are typically lighter in weight and have a simpler grain structure and they are commonly used in construction, framing, decking, and paper production. Examples include pine, spruce, cedar, and fir.',
            image: ''
            },
            {
            title: 'Hard wood',
            text: 'Comes from deciduous trees (angiosperms) that typically have broad leaves. Hardwoods are known for their dense structure and are often used in furniture making, flooring, cabinetry, and woodworking crafts. Examples include oak, maple, cherry, and walnut.',
            image: ''
            },
            ];
            categories.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const head1 = document.createElement('h2');
        head1.textContent = 'PRACTICAL 1 : HOW TO CUT WOOD';
        practicals.appendChild(head1);
        const procedure1 = document.createElement('div');
        const head2 = document.createElement('h3');
        head2.textContent = 'PROCEDURES';
        procedure1.appendChild(head2);
        const parts = [
            {
            list: 'Measure wood 600 x 75 x 25mm',
            video: ''
            },
            {
            list: 'Mark the piece using tape and pencil',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nuEz8TtrfjM?si=317XhtwxAT8UBvLZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use rip saw to cut 600mm long',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0IsDvh7GR4A?si=iRoHhqI4YNqkoDaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use the cross cut saw to the required length',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UmQdaWy3Pw0?si=o0A7GIikOJTJ1uCd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Mark out diagonal line using the sliding bevel',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nzQYd8wxCQE?si=8L3MYpv6SQVbkooR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use tenon saw to cut the diagonal line',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/au8ejou2VpE?si=ozX0ptTuVx-uyUdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            ];
            parts.forEach((item) => {
            procedure1.appendChild(createVids(item));
            });
        practicals.appendChild(procedure1);
        const description1 = document.createElement('p');
        description1.textContent = 'The link to watch how to perform the butt joint practical is below 👇';
        practicals.appendChild(description1);
        const video3 = document.createElement('div');
        video3.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jxvOepMFtbA?si=UPxGfMvk_uYu0Mud" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video3);
        const head3 = document.createElement('h2');
        head3.textContent = 'PRACTICAL 2 : PLANNING OF WOOD';
        practicals.appendChild(head3);
        const procedure2 = document.createElement('div');
        const head4 = document.createElement('h3');
        head4.textContent = 'PROCEDURES';
        procedure2.appendChild(head4);
        const parts1 = [
            {
            list: 'Have timber 600mm by 75mm by 25mm thick',
            video: ''
            },
            {
            list: 'Fix the timber using clamps',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/t3v3J1EFrR8?si=9UKoG3eAqFxBVC4F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use plane in smoothing the surface',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c65rKk8frhc?si=WzZWCbuzb5Grk_A7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use the cross cut saw to the required length',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UmQdaWy3Pw0?si=o0A7GIikOJTJ1uCd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use try square to test the surface for flatness, when flat mark on it',
            video: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JxqqVFL_HN0?si=B0LdOsZpFApRrbr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Turn the edge and plane and test that it is square to the face and mark edge mark',
            video: ''
            },
            {
            list: 'Gauge the timber to have uniform thickness using the marking guage and plan off the surplus',
            video: ''
            },
            {
            list: 'Plane the other edge to give',
            video: ''
            },
            ];
            parts1.forEach((item) => {
            procedure2.appendChild(createVids(item));
            });
        practicals.appendChild(procedure2);
        const head5 = document.createElement('h2');
        head5.textContent = 'PRACTICAL 3 : TEE HALVING JOINTS';
        practicals.appendChild(head5);
        const procedure3 = document.createElement('div');
        const head6 = document.createElement('h3');
        head6.textContent = 'PROCEDURES';
        procedure3.appendChild(head6);
        const parts2 = [
            {
            list: 'Mark out the pieces one for socket and the other for pin using tape, marking gauge, pencil and try square',
            video: ''
            },
            {
            list: 'Cut the marking line as specified using tenon saw',
            video: ''
            },
            {
            list: 'Remove the waste using chisel and mallet',
            video: ''
            },
            {
            list: 'Clean the bottom using rasp',
            video: ''
            },
            {
            list: 'Cut the pin to size the pocket',
            video: ''
            },
            {
            list: 'Fix the joint by applying light mallet below',
            video: ''
            },
            {
            list: 'When properly fix test for square-ness using try square',
            video: ''
            },
            ];
            parts2.forEach((item) => {
            procedure3.appendChild(createVids(item));
            });
        practicals.appendChild(procedure3);
        const description2 = document.createElement('p');
        description2.textContent = 'The link to watch how to perform the Tee halving Joint practical is below 👇';
        practicals.appendChild(description2);
        const video4 = document.createElement('div');
        video4.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5xOXRyVJ_1A?si=h5s7a-IHCwNsZdzO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video4);
        const head7 = document.createElement('h2');
        head7.textContent = 'PRACTICAL 4: DOVETAIL HALVING JOINT';
        practicals.appendChild(head7);
        const procedure4 = document.createElement('div');
        const head8 = document.createElement('h3');
        head8.textContent = 'PROCEDURES';
        procedure4.appendChild(head8);
        const parts3 = [
            {
            list: 'Mark out the two pieces, one having the socket and the other dovetail pin',
            video: ''
            },
            {
            list: 'Use try square to transfer the marks to the edges',
            video: ''
            },
            {
            list: 'First cut the socket using dovetail saw',
            video: ''
            },
            {
            list: 'Scoop out the waste and clean up using chisels',
            video: ''
            },
            {
            list: 'Cut the pin and the dovetail',
            video: ''
            },
            {
            list: 'Including the waste portion clean the pin using paring chisel',
            video: ''
            },
            {
            list: 'Fix and adjust by removing unwanted parts',
            video: ''
            },
            {
                list: 'Fix finally making sure there is a flush surface',
                video: ''
                },
                {
                    list: 'Plan the joint and test for square-ness',
                    video: ''
                    },
            ];
            parts3.forEach((item) => {
            procedure4.appendChild(createVids(item));
            });
        practicals.appendChild(procedure4);
        const description3 = document.createElement('p');
        description3.textContent = 'The link to watch how to perform the Dovetail halving Joint practical is below 👇';
        practicals.appendChild(description3);
        const video5 = document.createElement('div');
        video5.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9jgRfef4ZnE?si=QyfCg0XiURVowmfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video5);
        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that proper techniques for cutting, drilling, and sanding to minimize the risk of accidents.","I ensured that I avoided cutting towards yourself and keep your hands and fingers away from blades and moving parts."];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, cutting of wood, planning of wood was understood and also a tee halving joint, dovetail halving joint was developed and was also understood.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Foundations of Woodworking: Essential Joinery Techniques and Building Strategies by Michael Pekovich", "The Complete Manual of Woodworking by Albert Jackson, David Day, and Simon Jennings"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
};


const displaySM201 = (main) => {

};


const displayBF201 = (main) => {

};


const displayHS201 = (main) => {

};


const displayMS201 = (main) => {

};


const displayAS201 = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
        const head = document.createElement('h1');
        head.textContent  = 'The Internal Combustion Engine{AS201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['To know the major parts of an internal combustion engine and their functions.', 'To know the different classifications of the internal combustion engine',   'To be able to describe the working cycle of a four- stroke-cycle internal combustion spark ignition engine and compression ignition engine', 'To be able to diagnose simple internal combustion engine faults', 'To know how to change the engine oil of an internal combustion engine', 'To be able to identify the tools used to effect repairs on an internal combustion engine',  'To know the routine checks and routine maintenance carried out on an internal combustion engine'];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(objective);
        const engineDiv = document.createElement('div');
        const engineHead = document.createElement('h3');
        engineHead.textContent = 'THE INTERNAL COMBUSTION ENGINE AND THE PARTS OF AN INTERNAL COMBUSTION ENGINE';
        engineDiv.appendChild(engineHead);
        const enginePic = document.createElement('div');
        const img1 = document.createElement('img');
        img1.src =pic1;
        img1.alt = '';
        enginePic.appendChild(img1);
        const img2 = document.createElement('img');
        img2.src = pic2;
        img2.alt = '';
        enginePic.appendChild(img2);
        engineDiv.appendChild(enginePic);
        main.appendChild(engineDiv);
        const theory = document.createElement('section');
        const explain = document.createElement('div');
        explain.textContent = 'An internal combustion engine (ICE) is a type of engine where the fuel is burned inside the engine itself, creating hot gases that push pistons or turbines. This creates motion that can be used to power vehicles, generators, and other machines.Internal combustion engines fall into two primary categories: compression-ignition (CI) engines and spark-ignition (SI) engines and also the bottom dead centre, top dead centre and the combustion chamber are explained below:';
        theory.appendChild(explain);
        const categories = [
        {
        title: 'Spark-ignition engines',
        text: 'Spark plugs are used and spark-ignition engines are also commonly referred to as gasoline engines, to ignite the fuel-air mixture and . The combustion process creates pressure that drives pistons, which ultimately power the vehicle.',
        image: ''
        },
        {
        title: 'Combustion ignition engines',
        text: 'The fuel-air combination is ignited and this engine is commonly referred to as diesel engines, by the heat of compression, these engines compress only air in the combustion chamber, raising its temperature to the point where diesel fuel injected into the chamber ignites spontaneously. This combustion drives the engine\'s pistons.',
        image: ''
        },
        {
        title: 'Top dead centre',
        text: 'The position of the piston within the cylinder at the highest point of its stroke is referred to as top dead center. This refers to the position of the piston in an engine cylinder where it is farthest away from the crankshaft. It\'s essentially the highest point the piston reaches in its up-and-down motion within the cylinder',
        image: ''
        },
        {
        title: 'Bottom dead centre',
        text: 'It\'s the position of the piston in the cylinder when it\'s closest to the crankshaft. In other words, it\'s the lowest point the piston reaches in its movement.It refers to the position of the piston at the lowest point of its stroke within the cylinder. At the bottom dead centre, the piston is farthest away from the cylinder head, and the volume of the combustion chamber is at its largest.',
        image: ''
        },
        {
        title: 'Combustion chamber',
        text: 'The part of the cylinder where the compressed and ignited air-fuel mixture produces power is called the combustion chamber. It is made up of the gap that exists between the cylinder head and the top of the piston at the top dead centre. In this chamber, the burning of the air-fuel mixture in the combustion chamber creates hot gases that push the piston down, generating the power that drives the engine.',
        image: ''
        },
        ];
        categories.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const description = document.createElement('p');
        description.textContent = 'The internal combustion engine consists of various parts and some of these parts are listed below: ';
        theory.appendChild(description);
        const parts = [
        {
        title: 'Main engine block',
        text: 'The engine block is the core of the engine. It\'s a large cast iron or aluminum block that houses the cylinders, pistons, crankshaft, and other critical components. It provides the structure and support for the entire engine assembly.',
        image: pic3
        },
        {
        title: 'Cylinders',
        text: 'Cylinders are the chambers within the engine block where the combustion process (burning of air-fuel mixture) takes place. Pistons move up and down within the cylinders. The number of cylinders varies depending on the engine design, with more cylinders typically indicating a more powerful engine.',
        image: pic4
        },
        {
        title: 'Pistons',
        text: 'Inside the cylinders, pistons are cylindrical parts that move up and down. During the compression stroke, they compress the air-fuel mixture, and during the power stroke, they transfer the combustion force to the crankshaft. Through connecting rods, the crankshaft and pistons are joined.',
        image: pic5
        },
        {
        title: 'Connecting rods',
        text: 'Connecting rods are the link between the pistons and the crankshaft. They convert the reciprocating (up-and-down) motion of the pistons into the rotating motion of the crankshaft.',
        image: pic6
        },
        {
        title: 'Camshaft',
        text: 'is the shaft that regulates the valves\' opening and shutting. Its elevated portions, or lobes, exert pressure on the valve lifters, which causes the valves to open. Via a timing belt or chain, the crankshaft drives the camshaft.',
        image: pic7
        },
        {
        title: 'Crankshaft',
        text: 'The crankshaft is a rotating shaft that sits at the bottom of the engine block. It receives the reciprocating motion from the connecting rods and converts it into rotary motion. This rotational motion is then used to power the wheels of a vehicle or to drive other machines.',
        image: pic8
        },
        {
        title: 'Spark Plugs',
        text: 'Spark plugs are used in spark-ignition (SI) engines to ignite the air-fuel mixture. They create a spark that ignites the mixture, initiating the combustion process.',
        image: pic9
        },
        {
        title: 'Valves',
        text: 'Valves are spring-loaded mechanisms that control the flow of air and fuel into and out of the cylinders. There are typically two valves per cylinder: one intake valve and one exhaust valve. The camshaft opens and closes the valves at specific points in the engine cycle.',
        image: pic10
        },
        ];
        parts.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const working = document.createElement('p');
        working.textContent = 'The core working principle of the majority of contemporary internal combustion engines is the four-stroke cycle, sometimes referred to as the Otto cycle after its creator Nikolaus Otto. It is made up of four separate piston strokes or movements that each have a definite function in the combustion process inside the engine cylinder.';
        theory.appendChild(working);
        
        const stroke = document.createElement('p');
        stroke.textContent = 'A four-stroke cycle is commonly used by both spark-ignition (SI) and the combustion ignition (CI) engines discussed above briefly to transform fuel into useful energy. This consists of :';
        theory.appendChild(stroke);
        const strokes = [
        {
        title: 'Intake stroke',
        text: 'As the piston descends, fuel and air are drawn into the cylinder. It is a mixture of fuel (in gasoline engines) or air (in diesel engines) is drawn into the cylinder through the intake valve. This creates a combustible mixture in the combustion chamber.',
        image: ''
        },
        {
        title: 'Compression stroke',
        text: 'As the piston rises, the fuel and air mixture are compressed and this compression increases the pressure and temperature of the mixture, making it more combustible and efficient to burn.',
        image: ''
        },
        {
        title: 'Combustion/power stroke',
        text: 'In a spark ignition (SI) engine, the air-fuel combination is ignited by the spark plug; in a combustion ignition (CI) engine, the mixture is ignited by the heat of compression and the resulting explosion rapidly increases pressure within the cylinder, driving the piston forcefully back down. This downward movement is what generates the power needed to turn the engine\'s crankshaft. This results in the rapid expansion of hot gasses.',
        image: ''
        },
        {
        title: 'Exhaust stroke',
        text: 'As the piston descends, the cylinder\'s exhaust gasses are forced out as the piston reaches the bottom of its stroke again, the exhaust valve opens, and the piston moves back up the cylinder. This upward movement expels the spent exhaust gases from the combustion chamber through the exhaust valve, preparing the cylinder for the next cycle.',
        image: ''
        },
        ];
        strokes.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const text1 = document.createElement('p');
        text1.textContent = 'Watch how the four cycle stroke works and how the internal combustion engine works';
        theory.appendChild(text1);
        const video1 = document.createElement('div');
        video1.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZQvfHyfgBtA?si=OEHS2Tg6ckvlpaGJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        theory.appendChild(video1);
        
        const head1 = document.createElement('h3');
        head1.textContent = 'Applications of an internal combustion engine include:';
        theory.appendChild(head1);
        const applications = [
        {
        title: 'Transportation',
        text: 'Internal combustion engines are most frequently used to power automobiles. Automobiles, trucks, motorbikes, scooters, and even airplanes (with piston engines) fall within this category.',
        image: ''
        },
        {
        title: 'Power generation',
        text: 'Stationary applications utilizing internal combustion engines can provide energy. These are very helpful as backup power generators in distant locations.',
        image: ''
        },
        {
        title: 'Aircraft',
        text: 'Many aircraft, particularly smaller general aviation planes, rely on internal combustion engines for propulsion. These engines may run on aviation gasoline (avgas) or jet fuel.',
        image: ''
        },
        {
        title: 'Marine',
        text: 'Internal combustion engines are used in boats, ships, and other marine vessels for propulsion. They can run on gasoline, diesel, or alternative fuels such as liquefied natural gas (LNG).',
        image: ''
        },
        ];
        applications.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const internal = document.createElement('p');
        internal.textContent = 'An internal combustion engine is meant to be checked regularly and also undergo some maintenance which include:';
        theory.appendChild(internal);
        const check = document.createElement('h3');
        check.textContent = 'ROUTINE CHECKS:';
        theory.appendChild(check);
        const checkList = document.createElement('ul');
        const checks = ['Check the battery terminals for corrosion and ensure they are tight and secure and test the battery voltage and charging system to ensure proper operation.', 'Check the oil level using the dipstick and top up if necessary. Also, monitor the oil condition and schedule regular oil changes.', 'Check the condition of belts and hoses for cracks, wear, or loose connections. Cracked or worn belts and hoses can break and lead to engine problems', 'Look around and check the engine compartment for any signs of leaks, including oil, coolant, or other fluids. Leaks can indicate potential problems and should be addressed promptly.', 'Inspect and check the belts for wear, cracks, or fraying. Replace worn or damaged belts to prevent unexpected failures.'];
        let array = [];
        for(let i = 0; i < checks.length; i++){
            array[i] = document.createElement('li');
            array[i].textContent = checks[i];
            checkList.appendChild(array[i]);
        }
        theory.appendChild(checkList);
        
        const maintain = document.createElement('h3');
        maintain.textContent = 'ROUTINE MAINTENANCE:';
        theory.appendChild(maintain);
        const maintainList = document.createElement('ul');
        const maintenance = ['Regularly change the engine oil and oil filter according to the manufacturer\'s recommended intervals. Fresh oil lubricates engine components, reduces wear, and helps maintain engine performance.', 'Regularly replace the engine air filter at regular intervals to ensure proper airflow and filtration. A clean air filter helps optimize engine performance and fuel efficiency.','Regularly replace the fuel filter to prevent fuel system contamination and maintain proper fuel flow.', 'Regularly replace spark plugs at the recommended intervals to ensure reliable ignition and efficient combustion because worn or fouled spark plugs can lead to poor engine performance and reduced fuel efficiency.', 'Regularly replace the timing belt or timing chain to prevent engine damage due to timing system failure.'];
        let box = [];
        for(let i = 0; i < maintenance.length; i++){
            box[i] = document.createElement('li');
            box[i].textContent = maintenance[i];
            maintainList.appendChild(box[i]);
        }
        theory.appendChild(maintainList);
        const tool = document.createElement('h4');
        tool.textContent = 'FEW TOOLS USED TO EFFECT REPAIRS ON AN INTERNAL COMBUSTION ENGINE:';
        theory.appendChild(tool);
        const tools = [
            {
                title: 'Screwdrivers',
                text: 'Needed for various screwing and prying tasks during engine repairs.',
                image: pic11
            },
            {
                title: 'Hammer',
                text: 'A rubber mallet is preferable to avoid damaging engine parts, but a standard metal hammer may also be needed for some tasks.',
                image: pic12
            },
            {
                title: 'Torque Wrench',
                text: 'This wrench allows for applying a specific amount of torque when tightening fasteners, crucial to prevent over tightening or under-tightening critical engine components.',
                image: pic13
            },
            {
                title: 'Pliers',
                text: 'Useful for gripping, turning, and manipulating components during engine work.',
                image: pic14
            },
            {
                title: 'Funnel',
                text: 'Used for adding fluids like engine oil or coolant without spills.',
                image: pic15
            },
            {
                title: 'Spanner',
                text: 'is a metal tool used to grip and turn nuts, bolts, and other fasteners.',
                image: pic16
            },
            {
                title: 'Car jack:',
                text: 'A car jack is a mechanical device used to lift vehicles off the ground to facilitate maintenance, repairs, tire changes, and other tasks.',
                image: pic17
            },
        ];
        tools.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        const step = document.createElement('h3');
        step.textContent = 'STEPS TAKEN TO CHANGE THE OIL IN AN INTERNAL COMBUSTION ENGINE';
        theory.appendChild(step);
        const stepList = document.createElement('ul');
        const steps = ["Get the supplies you'll need, such as engine oil (the kind and viscosity that the manufacturer recommends), a fresh oil filter, a wrench or socket set to remove the drain plug and oil filter, a drain pan to catch the used oil, and protective gloves and safety glasses.","Put the car in park on a level area and apply the parking brake. Make sure the engine is cool to prevent hot oil burns. To access the underbelly, lift the car if needed using jacks or ramps.","Look beneath the engine to find the oil drain plug. If you're not sure where it is exactly, check the owner's manual. To collect the spent oil, place the drain pan underneath the drain plug.","Carefully remove the oil drain plug by turning it counter clockwise with a wrench or socket set. Keep in mind that the oil could be heated. After the drain stopper is loose, fully remove it and let the old oil run out into the drain pan. Make sure that all of the oil is captured by the drain pan.", "Locate the oil filter, typically located near the oil pan. Use an oil filter wrench to loosen the oil filter in a counter clockwise direction. Once loosened, carefully unscrew and remove the old oil filter. Be prepared for oil to spill out when removing the filter, so ensure the drain pan is positioned to catch any spills.", "Apply a small layer of fresh engine oil to the rubber gasket on the new oil filter before installing it. This facilitates the creation of a good seal and makes removal simpler when the next oil change is performed.", "Carefully screw the new oil filter onto the engine by hand in a clockwise direction until it is snug. Avoid over-tightening the filter, as this can damage the gasket or cause leaks.", "After the old oil has completely drained, clean the drain plug and look for any damage to the washer or gasket. If required, swap out the gasket or washer. Using a wrench or socket set, carefully reinstall the drain plug and tighten it firmly.", "Find and take off the oil filler cap located atop the engine. As directed by the manufacturer and contained in the owner's manual, use a funnel to add the right kind and quantity of new engine oil.", "After adding new oil, replace the oil filler cap securely. Start the engine and let it run for a few minutes to circulate the new oil throughout the engine. Turn off the engine and allow it to sit for a few minutes to allow the oil to settle",
         "To check the oil level, remove the oil dipstick while the engine is off, clean it, fully insert it again, and then remove it once again. If extra oil is needed to get it to the right level, add it.", "Properly dispose of the old oil and oil filter according to local regulations. Many auto parts stores and recycling centers accept used oil for recycling."];
        let stepBox = [];
        for(let i = 0; i < steps.length; i++){
            stepBox[i] = document.createElement('li');
            stepBox[i].textContent = steps[i];
            stepList.appendChild(stepBox[i]);
        }
        theory.appendChild(stepList);
        const text2 = document.createElement('p');
        text2.textContent = 'Watch how to change the oil of an internal combustion engine of a car';
        theory.appendChild(text2);
        const video2 = document.createElement('div');
        video2.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/O1hF25Cowv8?si=3x-n7uQOPEgDEK4q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        theory.appendChild(video2);
        main.appendChild(theory);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)", "I ensured that before performing any maintenance or repairs, allow the engine to cool down to prevent burns from hot engine components, exhaust gases, or fluids", "I Ensured that I read and understand the manufacturer's instructions and safety guidelines provided in the owner's manual or service manual before performing any maintenance or repairs."];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, the parts of the internal combustion engine was understood and were identified and also how the internal combustion engine works and also how the four cycle strokes works.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Bosch Automotive Handbook by Robert Bosch.", "Internal Combustion Engine Fundamentals by John Heywood."];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
};
const displayFS201 = (main) => {

};
export {displayStarted,displayWW201, displaySM201, displayBF201, displayHS201, displayMS201 ,displayAS201, displayFS201};
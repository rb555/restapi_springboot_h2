import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    // todo: show fighter info (image, name, health, etc.)
    const fighterInfoElement = createElement({
        tagName: 'div',
        className: 'fighter-preview_ _ _info'
    });

    const fighterImageElement = createFighterImage(fighter);

    const fighterNameElement = createElement({
        tagName: 'h3',
        className: 'fighter-preview_ _ _name',
        innerText: fighter.name
    });

    const fighterHealthElement = createElement({
        tagName: 'p',
        className: 'fighter-preview_ _ _health',
        innerText: `Health: ${fighter.health}`
    });

    fighterInfoElement.appendChild(fighterImageElement);
    fighterInfoElement.appendChild(fighterNameElement);
    fighterInfoElement.appendChild(fighterHealthElement);
    fighterElement.appendChild(fighterInfoElement);
    
    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}

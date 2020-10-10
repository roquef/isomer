class Sprite {
    constructor(pos, opts = {}) {
        console.log(pos, opts);
        this.options = {
            position: pos,
            ...opts
        };
        this.img = new Image();
        this.img.src = this.options.path;

        return this;
    }
}

export default Sprite;
import { Formattable } from './blot';
import LeafBlot from './leaf';


class EmbedBlot extends LeafBlot implements Formattable {
  format(name: string, value: any): void {
    // Do nothing by default
  }

  formats(): { [index: string]: any } {
    return {};
  }

  index(node, offset): number {
    if (node !== this.domNode) return -1;
    return Math.min(offset, 1);
  }

  length(): number {
    return 1;
  }

  position(index: number, inclusive?: boolean): [Node, number] {
    let offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
    if (index > 0) offset += 1;
    return [this.parent.domNode, offset];
  }

  value(): boolean {
    return true;
  }
}


export default EmbedBlot;
export enum ButtonVariation {outline, filled}
export enum Orientation {left, right}

export type Process = {
  number: string
  title: string
  description: string
}

export type SuccessStory = {
  number: string
  src: string
  title:string
  hyperlink:string
}

export type Enterprise = {
  number: string
  logo: string
  description: string

}

export type Service = {
  number: string
  title: string
  description: string
  image?: string
  titleOrientation: Orientation
  descriptionOrientation: Orientation
}

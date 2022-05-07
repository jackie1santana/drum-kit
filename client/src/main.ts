import '../public/style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IEventKeys = () => void;

const keyDownFunc: IEventKeys = () => {
    window.addEventListener('keydown', (e: KeyboardEvent): void => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
        const classKey = document.querySelector(`.key[data-key="${e.keyCode}"]`) as HTMLDataElement;

        if (!audio) return

        audio.currentTime = 0; // rewind to the start on each keydown for the drum sounds
        audio.play()

        classKey.classList.add('playing')

        //  window.addEventListener('keyup', (): void => {
        //     classKey.classList.remove('playing')
        // })
        
        const keys = document.querySelectorAll('.key') as NodeListOf<HTMLElement>
        keys.forEach((key: HTMLElement): void => key.addEventListener('transitionend', (e: { propertyName: string; }): void => {
            if (e.propertyName !== 'transform') return // skip if its not transform
            
            key.classList.remove('playing') 
        }))
    })
}

keyDownFunc()

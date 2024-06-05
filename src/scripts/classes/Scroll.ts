import LocomotiveScroll from 'node_modules/locomotive-scroll'

import type {
	ILenisScrollToOptions,
	lenisTargetScrollTo
} from 'node_modules/locomotive-scroll/dist/types/types'

export class Scroll {
	static locomotiveScroll: LocomotiveScroll
	static isInit = false
	static isHeaderHidden = false

	// =============================================================================
	// Lifecycle
	// =============================================================================
	static init() {
		this.locomotiveScroll = new LocomotiveScroll({})
	}

	static destroy() {
		this.isInit = false
		this.isHeaderHidden = false
		this.locomotiveScroll?.destroy()
	}

	// =============================================================================
	// Methods
	// =============================================================================
	static start() {
		this.locomotiveScroll?.start()
	}

	static stop() {
		this.locomotiveScroll?.stop()
	}

	static addScrollElements(container: HTMLElement) {
		this.locomotiveScroll?.addScrollElements(container)
	}

	static removeScrollElements(container: HTMLElement) {
		this.locomotiveScroll?.removeScrollElements(container)
	}

	static scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions) {
		this.locomotiveScroll?.scrollTo(target, options)
	}
}
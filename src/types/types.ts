import { HTMLAttributes } from 'react';

export type Theme = 'default' | 'auto' | 'dark';

export interface HTMLInputProps extends HTMLAttributes<HTMLInputElement> {
	type?: string;
	label: string;
	name: string;
	value: unknown;
	error: string | boolean;
	full?: boolean;
	required?: boolean;
	inputLabel?: string;
	linkInput?: string;
	errorMessage?: string;
}

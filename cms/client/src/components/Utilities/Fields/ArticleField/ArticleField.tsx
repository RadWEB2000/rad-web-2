import { FormEventHandler, useState } from "react";
import { MdDone } from "react-icons/md";
import styles from "./ArticleField.module.scss";
import Dropzone, { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import axios from "axios";
import Image from "next/image";

const {
	checkbox,
	dropzone,
	dropzone__image,
	dropzone__preview,
	dropzone__wrapper,
	field,
	label: labelStyle,
	radio,
} = styles;

const PreviewImage = ({
	featured,
	handle,
	path,
	title,
}: {
	featured: boolean;
	handle: any;
	path: string;
	title: string;
}) => (
	<figure className={dropzone__image} data-featured={featured}>
		<Image
			alt={title}
			fill
			onLoad={handle}
			src={path}
			style={{
				objectFit: "cover",
				objectPosition: "center",
			}}
			quality={70}
		/>
	</figure>
);

interface iArticleField {
	checked?: {
		handle: FormEventHandler;
		value: boolean;
	};
	drop?: {
		acceptedFilesTitle: string;
		isFeautured: boolean;
		maxFiles: 1 | 0;
	};
	id: string;
	fieldType?: "text" | "number" | "date";
	label: string;
	max?: number;
	min?: number;
	name: string;
	pattern?: string;
	placeholder?: string;
	radioOptions?: {
		id: string;
		label: string;
		value: string;
	}[];
	required?: boolean;
	variant: "field" | "checkbox" | "author" | "radio" | "imagepick";
}

export const ArticleField = ({
	checked,
	drop,
	id,
	fieldType,
	label,
	max,
	min,
	name,
	pattern,
	placeholder,
	radioOptions,
	required = false,
	variant,
}: iArticleField) => {
	const [files, setFiles] = useState<any[]>([]);
	const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
		useDropzone({
			accept: {
				"image/jpeg": [],
				"image/webp": [],
				"image/png": [],
			},
			maxFiles: drop?.maxFiles ? drop.maxFiles : 1,
			noDragEventsBubbling: true,
			onDrop: (acceptedFiles) => {
				setFiles(
					acceptedFiles.map((file) =>
						Object.assign(file, {
							preview: URL.createObjectURL(file),
						})
					)
				);
			},
		});

	if (variant === "field" && fieldType && placeholder) {
		return (
			<div className={field}>
				<label className={labelStyle} htmlFor={name}>
					{required && <sup>*</sup>} {label} :
				</label>
				<input
					aria-label={label}
					max={max}
					min={min}
					name={name}
					pattern={pattern}
					placeholder={placeholder}
					required={required}
					type={fieldType}
				/>
			</div>
		);
	} else if (variant === "checkbox" && checked) {
		return (
			<div className={checkbox}>
				<span className={labelStyle}>{label}</span>
				<input onChange={checked.handle} type="checkbox" name={name} id={id} />
				<label htmlFor={name}>
					{checked?.value && (
						<span>
							<MdDone />
						</span>
					)}
				</label>
			</div>
		);
	} else if (variant === "radio" && radioOptions) {
		return (
			<fieldset className={radio}>
				<legend className={labelStyle}>{label}</legend>
				<ul>
					{radioOptions.map(({ id, label, value }) => {
						return (
							<div key={label}>
								<input type="radio" name={name} id={id} value={value} />
								<label htmlFor={id}>{label}</label>
							</div>
						);
					})}
				</ul>
			</fieldset>
		);
	} else if (variant === "imagepick" && drop) {
		const acceptedImages = acceptedFiles.map((file: any) => (
			<PreviewImage
				featured={drop.isFeautured}
				handle={() => {
					URL.revokeObjectURL(file.preview);
				}}
				key={file.name}
				path={file.preview}
				title={file.name}
			/>
		));
		return (
			<div className={dropzone__wrapper}>
				<div className={dropzone} {...getRootProps()}>
					<p>{label}</p>
				</div>
				<div
					className={dropzone__preview}
					data-open={acceptedFiles.length !== 0}
				>
					<ul>{acceptedImages}</ul>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

import React from 'react';
import classNames from 'classnames';

import titleStyles from './styles.module.scss';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5';

interface TitleProps {
  children: React.ReactNode;
  /** Gives a unique id to the title */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds top and bottom margin in rem. */
  margin?: number;
  /** Changes the underlying element of the title. */
  htmlMarkup?: TitleTags;
  /** Changes the appearance of the title. */
  appearance?: TitleAppearances;
}

const Title = React.forwardRef(function TitleForwardedRef(props: TitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const { id, children, className, htmlMarkup = 'h1', appearance = 'title1', margin = 0 } = props;
  const titleClasses = classNames(
    titleStyles.title,
    {
      [titleStyles['title--feature']]: appearance === 'titleFeature',
      [titleStyles['title--title1']]: appearance === 'title1',
      [titleStyles['title--title2']]: appearance === 'title2',
      [titleStyles['title--title3']]: appearance === 'title3',
      [titleStyles['title--title4']]: appearance === 'title4',
      [titleStyles['title--title5']]: appearance === 'title5',
    },
    className
  );
  const CustomTag = htmlMarkup;

  return (
    <CustomTag id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
      {children}
    </CustomTag>
  );
});

export default Title;

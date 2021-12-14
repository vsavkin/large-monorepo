import { render } from '@testing-library/react';

import Icon209 from './icon209';

describe('Icon209', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon209 />);
    expect(baseElement).toBeTruthy();
  });
});

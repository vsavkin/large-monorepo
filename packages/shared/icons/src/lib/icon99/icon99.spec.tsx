import { render } from '@testing-library/react';

import Icon99 from './icon99';

describe('Icon99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon99 />);
    expect(baseElement).toBeTruthy();
  });
});

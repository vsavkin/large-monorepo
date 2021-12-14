import { render } from '@testing-library/react';

import Icon12 from './icon12';

describe('Icon12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon12 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Icon8 from './icon8';

describe('Icon8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon8 />);
    expect(baseElement).toBeTruthy();
  });
});

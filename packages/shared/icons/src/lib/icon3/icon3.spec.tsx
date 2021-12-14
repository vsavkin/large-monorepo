import { render } from '@testing-library/react';

import Icon3 from './icon3';

describe('Icon3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon3 />);
    expect(baseElement).toBeTruthy();
  });
});

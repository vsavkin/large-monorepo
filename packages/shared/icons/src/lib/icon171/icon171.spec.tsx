import { render } from '@testing-library/react';

import Icon171 from './icon171';

describe('Icon171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon171 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Icon231 from './icon231';

describe('Icon231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon231 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Icon46 from './icon46';

describe('Icon46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon46 />);
    expect(baseElement).toBeTruthy();
  });
});

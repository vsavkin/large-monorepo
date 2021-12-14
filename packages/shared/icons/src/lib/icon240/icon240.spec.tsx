import { render } from '@testing-library/react';

import Icon240 from './icon240';

describe('Icon240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon240 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Icon59 from './icon59';

describe('Icon59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon59 />);
    expect(baseElement).toBeTruthy();
  });
});

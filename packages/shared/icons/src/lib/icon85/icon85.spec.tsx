import { render } from '@testing-library/react';

import Icon85 from './icon85';

describe('Icon85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon85 />);
    expect(baseElement).toBeTruthy();
  });
});

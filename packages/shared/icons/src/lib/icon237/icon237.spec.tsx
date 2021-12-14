import { render } from '@testing-library/react';

import Icon237 from './icon237';

describe('Icon237', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon237 />);
    expect(baseElement).toBeTruthy();
  });
});

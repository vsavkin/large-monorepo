import { render } from '@testing-library/react';

import Icon37 from './icon37';

describe('Icon37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon37 />);
    expect(baseElement).toBeTruthy();
  });
});

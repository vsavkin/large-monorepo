import { render } from '@testing-library/react';

import Icon64 from './icon64';

describe('Icon64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon64 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Icon241 from './icon241';

describe('Icon241', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon241 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ImportantComponent20 from './important-component-20';

describe('ImportantComponent20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent20 />);
    expect(baseElement).toBeTruthy();
  });
});

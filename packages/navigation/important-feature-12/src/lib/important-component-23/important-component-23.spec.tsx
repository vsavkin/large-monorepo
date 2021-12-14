import { render } from '@testing-library/react';

import ImportantComponent23 from './important-component-23';

describe('ImportantComponent23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent23 />);
    expect(baseElement).toBeTruthy();
  });
});

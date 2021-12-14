import { render } from '@testing-library/react';

import ImportantComponent81 from './important-component-81';

describe('ImportantComponent81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent81 />);
    expect(baseElement).toBeTruthy();
  });
});

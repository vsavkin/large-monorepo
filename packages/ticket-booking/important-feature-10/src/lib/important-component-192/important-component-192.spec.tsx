import { render } from '@testing-library/react';

import ImportantComponent192 from './important-component-192';

describe('ImportantComponent192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent192 />);
    expect(baseElement).toBeTruthy();
  });
});

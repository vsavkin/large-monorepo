import { render } from '@testing-library/react';

import ImportantComponent165 from './important-component-165';

describe('ImportantComponent165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent165 />);
    expect(baseElement).toBeTruthy();
  });
});
